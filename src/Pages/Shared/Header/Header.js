import React, { useContext, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Header = () => {
    const { user, loggingOut, createUser } = useContext(AuthContext);

    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const inpName = useRef(null);
    const inpEmail = useRef(null);
    const inpPassword = useRef(null);
    const inpConfirmPassword = useRef(null);

    const handleLogIN = event => {
        event.preventDefault();
        const email = inpEmail.current.value;
        const password = inpPassword.current.value;

        console.log(email, password);
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = inpName.current.value;
        const email = inpEmail.current.value;
        const password = inpPassword.current.value;
        const confirmPassword = inpConfirmPassword.current.value;

        createUser(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            event.target.reset();
        })
        .catch(error=>console.error(error))
    }

    const handleLogOut = () => {
        loggingOut();
    }

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
                            <Nav.Link eventKey={2} href="#memes">
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
                    <Form onClick={handleLogIN}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" required ref={inpEmail} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" required ref={inpPassword} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Log In
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer >
                    <h4 className='text-center'>Error text</h4>
                </Modal.Footer>
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
                    <Form onClick={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter user name" name='name' ref={inpName}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' ref={inpEmail}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' ref={inpPassword}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name='confirm_password' ref={inpConfirmPassword}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer >
                    <h4 className='text-center'>Error text</h4>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Header;