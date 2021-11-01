import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ManageOrders = ({ setHandleConfirm }) => {
  const [orders, setOrders] = useState([]);
  // const [confirm, setConfirm] = useState([]);

  useEffect(() => {
    fetch("https://limitless-harbor-13956.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // handle delete
  const handleDelete = (id) => {
    const url = `https://limitless-harbor-13956.herokuapp.com/orders/${id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm("Are you Want to Delete?");
        if (confirm) {
          if (data.deletedCount > 0) {
            alert("Services Deleted");

            const remaining = orders.filter((order) => order._id !== id);

            setOrders(remaining);
          }
        }
      });
  };

  //handle confirm booking

  const handleConfirm = (id) => {
    const con = window.confirm("Are you Sure?");
    const data = {};
    data.status = con;
    data.id = id;
    setHandleConfirm(data);
    if (con) {
      alert("Order Confirm Successfully");
    }
  };

  return (
    <Container className="text-center my-4">
      <h2>Manage Orders</h2>

      <Container className="d-flex justify-content-center  align-items-center">
        <Row className="gx-5">
          {orders.map((order) => (
            <Col sm={1} md={6} lg={4}>
              <Card
                className="shadow p-3 mb-5 bg-body rounded my-5"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={order?.tourImg} />
                <Card.Body>
                  <Card.Title className="text-primary">
                    {order?.tourName}
                  </Card.Title>
                  <p className="text-secondary">By: {order?.email}</p>

                  <Button
                    variant="success mx-4"
                    onClick={() => handleConfirm(order?._id)}
                  >
                    Confirm
                  </Button>

                  <Button
                    variant="danger"
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
export default ManageOrders;
