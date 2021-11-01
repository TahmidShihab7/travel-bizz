import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import Service from "./Service";

const Services = () => {
  const { services } = useServices();

  return (
    <Container className="my-5">
      <h2 className="text-center">Popular Destinations</h2>
      <p className="text-center text-secondary">
        We all live in an age that belongs to the young at heart. Life that is
        becoming extremely fast, day to.
      </p>
      {services.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row>
          {services.map((service) => (
            <Service service={service} key={service._key}></Service>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Services;
