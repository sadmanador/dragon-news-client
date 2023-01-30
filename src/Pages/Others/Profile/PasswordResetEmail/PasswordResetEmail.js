import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const PasswordResetEmail = () => {
  const { passwordReset } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const confirmEmail = form.confirmEmail.value;

    if (email !== confirmEmail) {
      return toast.error("Your confirm email doesn't match");
    }
    passwordReset(email)
      .then(() => {
        toast.success("Email Reset send to your email address")
        form.reset();
      })
      .catch((e) => {
        setError(e.message);
        toast.error(error);
      });
  };

  return (
    <div>
      <h2 className="mb-5 text-center">Password Reset Email</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Your Email" type="email" name="email" />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Confirm Email</Form.Label>
          <Form.Control
            placeholder="Rewrite your Email"
            type="email"
            name="confirmEmail"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default PasswordResetEmail;
