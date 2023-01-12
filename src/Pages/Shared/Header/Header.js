import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Header = () => {
    const { user, loggingOut } = useContext(AuthContext);

    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);


    const handleLogOut = () => {
        loggingOut();
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-4'>
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
                <Modal.Body>...</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">
                        Save Changes
                    </Button>
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
                <Modal.Body>...</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Header;