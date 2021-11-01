import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import useAuth from "../../hooks/useAuth";

const MyOrders = ({ handleConfirm }) => {
  // get the logged in user data
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch("https://limitless-harbor-13956.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // side Effect
  useEffect(() => {
    const found = orders.filter((order) => order?.email === user?.email);
    setMyOrders(found);
  }, [orders, user?.email]);

  // handle status
  const statusData = {};
  const handleStatus = () => {
    statusData.data = handleConfirm;
  };
  console.log(statusData);

  handleStatus();

  //   handle delete by user
  const handleDelete = (id) => {
    const url = `https://limitless-harbor-13956.herokuapp.com/orders/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm("Are you Want to Delete?");
        if (confirm) {
          if (data.deletedCount > 0) {
            alert("Services Deleted");
            const remaining = myOrders.filter((order) => order._id !== id);
            setMyOrders(remaining);
          }
        }
      });
  };

  return (
    <Container className="text-center my-4">
      <h2>My Orders</h2>
      <Container className="d-flex justify-content-center">
        <Row>
          {myOrders.map((order) => (
            <Col sm={1} md={6} lg={6}>
              <Card
                className="shadow p-3 mb-5 bg-body rounded my-5 "
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={order?.tourImg} />
                <Card.Body>
                  <Card.Title className="text-primary">
                    {order?.tourName}
                  </Card.Title>
                  <p className="text-secondary">
                    <b>By:</b> {order?.email}
                  </p>
                  <span>
                    <b className="text-secondary">Status: </b>{" "}
                    {handleConfirm.id === order._id ? (
                      <span className="text-success">Order Confirmed</span>
                    ) : (
                      <span>Pending</span>
                    )}
                  </span>
                  <br />
                  <Button
                    variant="danger mt-2"
                    onClick={() => handleDelete(order?._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default MyOrders;
