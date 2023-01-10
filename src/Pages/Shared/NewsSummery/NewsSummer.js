import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


const NewsSummer = ({ news }) => {
    console.log(news);
    const { author, category_id, thumbnail_url, title, total_view, rating, details, } = news;
    const { img, name, published_date } = author;
    const { number } = rating
    return (
        <Card className="mb-4 shadow">
            <Card.Header>
                <div className='d-flex'>
                    <Image className='me-3' src={img} alt="Author-img" style={{ width: "50px", height: "100%" }} roundedCircle/>
                    <div>
                        <p>{name}</p>
                        <p>{published_date}</p>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Image src={thumbnail_url} alt="" />
                <Card.Text>{details}</Card.Text>
            </Card.Body>
            <Card.Footer className=""></Card.Footer>
        </Card>
    );
};

export default NewsSummer;