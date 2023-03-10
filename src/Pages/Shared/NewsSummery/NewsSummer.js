import { Box, Rating } from "@mui/material";
import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <Card className="mb-4 border-0 shadow">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            className="me-3 shadow"
            src={img}
            alt="Author-img"
            style={{ width: "50px", height: "100%" }}
            roundedCircle
          />
          <div>
            <p className="mb-0 fw-semibold">{name}</p>
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
        <Card.Text className="my-4 mx-3">
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
        <p className="ms-2 mb-0 fw-semibold">Rating: {rating?.number}</p>
          <Rating
            name="half-rating-read"
            defaultValue={rating?.number}
            precision={0.5}
            readOnly
          />
  
         
        </div>
        <div>
          <FaEye className="me-2" />
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummer;
