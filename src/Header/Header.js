import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="info"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={HashLink} to="/home">
            Travel Agency
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center ">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#guides">
                Guides
              </Nav.Link>
              <>
                {user?.email && (
                  <>
                    <Nav.Link as={HashLink} to="/myOrders">
                      My Orders
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/manageOrders">
                      Manage Orders
                    </Nav.Link>
                    <Nav.Link as={HashLink} to="/ManageServices">
                      Manage Services
                    </Nav.Link>
                  </>
                )}
              </>
              <Nav.Link as={HashLink} to="/whyChooseUs">
                Why Choose Us
              </Nav.Link>
              <Nav.Link as={HashLink} to="/contactUS">
                Contact Us
              </Nav.Link>

              {user?.email ? (
                <div>
                  <Button onClick={logOut} variant="light">
                    Logout
                  </Button>
                  <Navbar.Text className="ms-2">
                    Signed in as:{" "}
                    <span className="text-light fw-bold">
                      {user?.displayName}
                    </span>
                  </Navbar.Text>
                </div>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    <Button variant="light">Login/Register</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
