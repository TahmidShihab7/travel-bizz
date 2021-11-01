import React from "react";
import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const service = (props) => {
  const { _id, name, image, duration, date, price } = props.service;
  return (
    <Col sm={1} md={6} lg={4}>
      <Card
        className="my-3 shadow p-3 mb-5 bg-body rounded"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" className="img-fluid rounded" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <b>Duration: </b>
                {duration}
              </ListGroupItem>
              <ListGroupItem>
                <b>Date: </b>
                {date}
              </ListGroupItem>
              <ListGroupItem>
                <b>Price:</b> {price}
              </ListGroupItem>
            </ListGroup>
          </Card.Text>
          <Link to={`services/${_id}`}>
            <Button variant="success">See Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default service;
