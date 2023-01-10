import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const NewsSummer = ({ news }) => {
    console.log(news);
    const { author, category_id, thumbnail_url, title, total_view, rating, details, _id } = news;
    const { img, name, published_date } = author;
    const { number } = rating
    return (
        <Card className="mb-4 shadow">
            <Card.Header>
                <div className='d-flex'>
                    <Image className='me-3' src={img} alt="Author-img" style={{ width: "50px", height: "100%" }} roundedCircle />
                    <div>
                        <p>{name}</p>
                        <p>{published_date}</p>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={thumbnail_url} />
                <Card.Text>{
                    details.length > 250 ?
                    <p>{details.slice(0,250) + '... '}<Link to={`/news/${_id}`}>Read more</Link></p>
                    :
                    <p>{details}</p>
                }</Card.Text>
            </Card.Body>
            <Card.Footer className=""></Card.Footer>
        </Card>
    );
};

export default NewsSummer;