import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummer = ({ news }) => {
  const {
    author,
    category_id,
    thumbnail_url,
    title,
    total_view,
    rating,
    details,
    _id,
  } = news;
  const { img, name, published_date } = author;
  const { number } = rating;
  return (
    <Card className="mb-4 shadow">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            className="me-3"
            src={img}
            alt="Author-img"
            style={{ width: "50px", height: "100%" }}
            roundedCircle
          />
          <div>
            <p className="mb-0">{name}</p>
            <p>{published_date}</p>
          </div>
        </div>
        <div>
          <FaShareAlt className="me-3" />
          <FaRegBookmark />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={thumbnail_url} />
        <Card.Text>
          {details.length > 250 ? (
            <span>
              {details.slice(0, 250) + "... "}{" "}
              <Link to={`/news/${_id}`}>Read more</Link>
            </span>
          ) : (
            <span>{details}</span>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <div>
          <FaStar className="me-2 text-warning"/>
            <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2"/>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummer;
