import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { userLogIn, setRegister, setError } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogIN = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
        form.reset();
        navigate(from, {replace: true});
      })
      .catch((error) => setError(error.message));
  };
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      <div>
        <h5 className="mt-5">Other means of login</h5>
      <Button variant="primary" className="me-4">
        Login with Google
      </Button>
      <Button variant="primary" onClick={()=>setRegister(true)}>
        Register
      </Button>
      </div>
    </>
  );
};

export default Login;
