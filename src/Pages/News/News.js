import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id, author } = news;
    return (
        <div>
            <Card>
                <Card.Header as="h5">{author.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Image className='img-fluid' src={image_url} />
                    <Card.Text>{details}</Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>

    );
};

export default News;