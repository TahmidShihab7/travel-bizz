import React, { useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useServices from "../../hooks/useServices";

const ServiceDetails = () => {
  let { id } = useParams();
  const { services } = useServices();
  const [serDetails, setSerDetails] = useState({});

  useEffect(() => {
    const found = services.find((singleSer) => singleSer._id === id);
    if (services) {
      setSerDetails(found);
    }
  }, [id, services]);

  return (
    <Container className="my-5  text-center shadow p-3 mb-5 bg-body rounded">
      <img className="rounded my-2 img-fluid" src={serDetails?.image} alt="" />
      <h5 className="text-primary my-2">{serDetails?.name}</h5>
      <b className="text-secondary">{serDetails?.place}</b>
      <p className="text-secondary">{serDetails?.details}</p>
      <Row>
        <Col sm={12} lg={6} md={6}>
          <ListGroup>
            <ListGroup.Item className="text-secondary">
              <b>Date: </b>
              {serDetails?.date}
            </ListGroup.Item>
            <ListGroup.Item className="text-secondary">
              <b>Airport: </b>
              {serDetails?.airport}
            </ListGroup.Item>
            <ListGroup.Item className="text-secondary">
              <b>Code: </b>
              {serDetails?._key}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={12} lg={6} md={6}>
          <ListGroup>
            <ListGroup.Item className="text-secondary">
              <b>Duration: </b> {serDetails?.duration}
            </ListGroup.Item>
            <ListGroup.Item className="text-secondary">
              <b>Extras: </b>
              {serDetails?.extras}
            </ListGroup.Item>
            <ListGroup.Item className="text-secondary">
              <b>Price: </b>${serDetails?.price} <span>(Per Person)</span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Link to={`/placeOrder/${serDetails?._id}`}>
        <Button variant="primary my-3">Book Now</Button>
      </Link>
    </Container>
  );
};

export default ServiceDetails;
