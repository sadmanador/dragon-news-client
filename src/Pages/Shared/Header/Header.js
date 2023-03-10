import React, { useContext, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { toast } from "react-hot-toast";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState(null);

  const {
    user,
    loggingOut,
    createUser,
    userLogIn,
    updateDisplayName,
    setLogin,
    setRegister,
    login,
    register,
    checked,
    verifyUserEmail,
    handleChecked,
  } = useContext(AuthContext);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        setLogin(false);
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("Your email is not verified, Please verify your email");
        }
      })
      .catch((error) => setError(error.message));
  };

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
        updateProfile(name, photoUrl);
        setRegister(false);
        form.reset();
        navigate("/");
        handleEmailVerification();
        toast.success("Check your email to verify");
      })
      .catch((error) => setError(error.message));
  };

  const updateProfile = (name, photoUrl) => {
    updateDisplayName(name, photoUrl)
    .then(()=>{})
    .catch(error=> setError(error.message))
  }

  const handleEmailVerification = () => {
    verifyUserEmail().then(() => {});
  };

  const handleLogOut = () => {
    loggingOut();
  };

  // console.log(user);
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mb-4 shadow"
      >
        <Container>
          <Navbar.Brand href="/">Dragon News</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">News</Nav.Link>
              <Nav.Link href="#">Category</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item className="d-lg-none d-md-block">
                  <LeftSideNav></LeftSideNav>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Item href="#" className="mx-3">
                {user?.uid ? (
                  <>
                    <Link to='/profile'>
                      <Image
                        src={user?.photoURL}
                        style={{ height: "40px" }}
                        className="rounded-circle me-3 shadow"
                      />
                    </Link>
                    <span className="me-3 text-secondary fw-semibold">{user?.displayName}</span>
                    <Button variant="light" onClick={handleLogOut}>
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="me-2 font-weight-bold"
                      variant="light"
                      onClick={() => setLogin(true)}
                    >
                      Log In
                    </Button>
                    <Button variant="light" onClick={() => setRegister(true)}>
                      Register
                    </Button>
                  </>
                )}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        centered
        size="lg"
        show={login}
        onHide={() => setLogin(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!user?.uid ? (
            <Form onSubmit={handleLogIn}>
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
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </Form>
          ) : (
            <p>User successfully logged in.</p>
          )}
        </Modal.Body>
        {error && <Modal.Footer>{error}</Modal.Footer>}
      </Modal>
      <Modal
        centered
        size="lg"
        show={register}
        onHide={() => setRegister(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                  type="checkbox"
                  onClick={handleChecked}
                  label={
                    <>
                      I agree with{" "}
                      <Link to="/terms" onClick={() => setRegister(false)}>
                        terms and conditions
                      </Link>
                    </>
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={!checked}>
                Register
              </Button>
            </Form>
          ) : (
            <p>Successfully user created</p>
          )}
        </Modal.Body>
        {error && <Modal.Footer>{error}</Modal.Footer>}
      </Modal>
    </div>
  );
};

export default Header;
