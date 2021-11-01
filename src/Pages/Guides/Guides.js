import "./Guides.css";
import React from "react";
import img1 from "./img/tm-1.jpg";
import img2 from "./img/tm-2.jpg";
import img3 from "./img/tm-3.jpg";
import img4 from "./img/tm-4.jpg";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const Guides = () => {
  return (
    <Container className="shadow p-3 mb-5 bg-body rounded">
      <h1 className="text-center">Our Guide</h1>
      <h5 className="text-secondary text-center">
        A humble Person who takes you to world's you have always dreamt of
        visiting
      </h5>
      <Row className="my-5">
        <Col xs={12} sm={12} md={3} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Image
              className="img-fluid w-50 mx-auto my-2  "
              src={img1}
              roundedCircle
            />
            <Card.Body className="text-center">
              <Card.Title>WILLIAMSON</Card.Title>

              <Button variant="info text-white">See Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Image
              className="img-fluid img-fluid w-50 mx-auto my-2"
              src={img2}
              roundedCircle
            />
            <Card.Body className="text-center">
              <Card.Title>Angelina Jolie</Card.Title>

              <Button variant="info text-white">See Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Image
              className="img-fluid img-fluid w-50 mx-auto my-2"
              src={img3}
              roundedCircle
            />
            <Card.Body className="text-center">
              <Card.Title>KRISTIANA</Card.Title>

              <Button variant="info text-white">See Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Image
              className="img-fluid img-fluid w-50 mx-auto my-2"
              src={img4}
              roundedCircle
            />
            <Card.Body className="text-center">
              <Card.Title>EMMA DIKOSTYA</Card.Title>

              <Button variant="info text-white">See Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Guides;
