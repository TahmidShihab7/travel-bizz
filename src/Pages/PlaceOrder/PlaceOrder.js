import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import useServices from "../../hooks/useServices";

const PlaceOrder = () => {
  let { id } = useParams();
  const { services } = useServices();
  const [serDetails, setSerDetails] = useState({});

  useEffect(() => {
    const found = services.find((singleSer) => singleSer._id === id);
    if (services) {
      setSerDetails(found);
    }
  }, [id, services]);

  // get user data
  const { user } = useAuth();

  // handle hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const tourName = serDetails?.name;
    const tourImg = serDetails?.image;

    data.tourName = tourName;
    data.tourImg = tourImg;

    axios
      .post("https://limitless-harbor-13956.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Order Success");
          reset();
        }
      });
  };

  return (
    <Container>
      <Row>
        <Col sm={8} md={8} lg={7}>
          <Container className="my-5  text-center shadow p-3 mb-5 bg-body rounded">
            <img
              className="rounded my-2 img-fluid"
              src={serDetails?.image}
              alt=""
            />
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
          </Container>
        </Col>

        <Col sm={4} md={4} lg={5}>
          <Container className="my-5  text-center shadow p-3 mb-5 bg-body ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                value={user.displayName}
                placeholder="Enter Name"
                {...register("name", { required: true, maxLength: 20 })}
              />
              <br />
              <input
                value={user.email}
                placeholder="Enter Email"
                className="my-2"
                {...register("email", { required: true, maxLength: 200 })}
              />
              <br />
              <input
                placeholder="Enter Phone"
                {...register("phone", { required: true })}
              />
              <br />

              <input
                className="my-2 btn btn-success"
                type="submit"
                value="Book Now"
              />
              <br />
            </form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
