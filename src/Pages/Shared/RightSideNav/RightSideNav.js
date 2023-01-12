import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const { user, providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            {
                !user?.uid &&
                <ButtonGroup vertical className="d-grid gap-2">
                    <Button onClick={handleGoogleSignIn} size="lg" variant='outline-primary' className='w-100 px-5'>Sign in with <FaGoogle /></Button>
                    <Button size="lg" variant='outline-dark' className='w-100 px-5'>Sign in with <FaGithub /></Button>
                </ButtonGroup>
            }
            <ListGroup className='my-4'>
                <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item><FaWhatsapp /> WhatsApp</ListGroup.Item>
                <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item><FaTwitch /> Twitch</ListGroup.Item>
                <ListGroup.Item><FaYoutube /> Youtube</ListGroup.Item>
            </ListGroup>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;