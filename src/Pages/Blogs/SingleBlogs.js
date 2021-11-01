import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleBlogs = (props) => {
  const { name, index, s_dis, image } = props.blog;
  return (
    <Col sm={12} md={4} lg={4}>
      <Card className="my-3 " style={{ width: "18rem" }}>
        <Card.Img variant="top img-fluid" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>{s_dis}</p>
          </Card.Text>
          <Link to={`blogs/${index}`}>
            <Button variant="success">Read Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBlogs;
