import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, loggingOut, createUser, userLogIn, updateDisplayName} = useContext(AuthContext);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleLogIN = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        userLogIn(email, password)
            .then(result => {
                const user = result.user;
                navigate('/')
                form.reset();
            })
            .catch(error => setError(error))
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;

        if(password !== confirmPassword){
            setError("Password and Confirm Password does not match");
            return;
        }
        if(password.length < 6){
            setError("Password must be of 6 Characters long.");
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            setError('At least one character is required');
            return;
        }
        setError('');

        createUser(email, password)
            .then(result => {
                const user = result.user;
                navigate('/');
                updateDisplayName(name);
                form.reset();
            })
            .catch(error => setError(error))
    }

    

    const handleLogOut = () => {
        loggingOut();
    }

    // console.log(user);
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-4'>
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item className='d-lg-none d-md-block'>
                                    <LeftSideNav ></LeftSideNav>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className='mx-3'>
                                {
                                    user?.uid ?
                                        <>
                                            <Image />
                                            <span className='me-3'>{user?.displayName}</span>
                                            <Button variant='light' onClick={handleLogOut}>Log Out</Button>
                                        </>
                                        :
                                        <>
                                            <Button className="me-2 font-weight-bold" variant='light' onClick={() => setLogin(true)}>Log In</Button>
                                            <Button variant='light' onClick={() => setRegister(true)}>Register</Button>
                                        </>
                                }
                            </Nav.Link>
                            <Nav.Link href="#memes">
                                Dank memes
                            </Nav.Link>
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
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Small Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        !user?.uid ?
                            <Form onSubmit={handleLogIN}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" required />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Log In
                                </Button>
                            </Form>
                            :
                            <p>User successfully logged in.</p>
                    }
                </Modal.Body>
                {
                    error && <Modal.Footer>{error}</Modal.Footer>
                }
            </Modal>
            <Modal
                centered
                size="lg"
                show={register}
                onHide={() => setRegister(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        !user?.uid ?
                            <Form onSubmit={handleRegister}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter user name" name='name' required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name='email' required/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name='password' required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" name='confirm_password' required/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                            </Form>
                            :
                            <p>Successfully user created</p>
                    }
                </Modal.Body>
                {
                    error && <Modal.Footer>{error}</Modal.Footer>
                }
            </Modal>
        </div>
    );
};

export default Header;