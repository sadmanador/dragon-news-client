import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical className="d-grid gap-2">
                <Button size="lg" variant='outline-primary' className='w-100 px-5'>Sign in with <FaGoogle /></Button>
                <Button size="lg" variant='outline-dark' className='w-100 px-5'>Sign in with <FaGithub /></Button>
            </ButtonGroup>
            <ListGroup className='my-4'>
                <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                <ListGroup.Item><FaWhatsapp/> WhatsApp</ListGroup.Item>
                <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                <ListGroup.Item><FaTwitch/> Twitch</ListGroup.Item>
                <ListGroup.Item><FaYoutube/> Youtube</ListGroup.Item>
            </ListGroup>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;