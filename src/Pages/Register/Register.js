import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState(null);
  const {
    user,
    createUser,
    updateDisplayName,
    checked,
    handleChecked,
    verifyUserEmail,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;

    if (password !== confirmPassword) {
      setError("Password and Confirm Password does not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be of 6 Characters long.");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setError("At least one character is required");
      return;
    }
    setError(null);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateDisplayName(name, photoUrl);
        handleEmailVerification();
        form.reset();
        navigate("/");
        toast.success('Check your email to verify');
      })
      .catch((error) => setError(error.message));
  };

  const handleEmailVerification = () => {
    verifyUserEmail()
      .then(() => {})
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      {!user?.uid ? (
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert the url of photo"
              name="photoURL"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleChecked}
              type="checkbox"
              label={
                <>
                  I agree with <Link to="/terms">terms and conditions</Link>
                </>
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!checked}>
            Register
          </Button>
        </Form>
      ) : (
        <p>User Successfully Created</p>
      )}
      <div>
        <h4>{error}</h4>
      </div>
    </div>
  );
};

export default Register;
