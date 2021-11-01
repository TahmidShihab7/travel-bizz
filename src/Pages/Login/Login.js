import React from "react";
import { Button, Form } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {
    emailFormValue,
    passwordFormValue,
    createNewUser,
    err,
    checkBoxFelidValue,
    isLogIn,
    processLogin,
    nameFormValue,
    signInUsingGoogle,
  } = useAuth();
  //get email form value
  const getEmailFormValue = (e) => {
    emailFormValue(e.target.value);
  };

  //get password form value

  const getPasswordFormValue = (e) => {
    passwordFormValue(e.target.value);
  };

  // get name form value
  const getNameFormValue = (e) => {
    nameFormValue(e.target.value);
  };

  // new user Registration
  const handleRegistration = (e) => {
    e.preventDefault();
    if (isLogIn) {
      processLogin();
    } else {
      createNewUser();
    }
  };

  // toggle login or Sign Up
  const toggleLogIn = (e) => {
    checkBoxFelidValue(e.target.checked);
  };

  return (
    <div className="container mx-auto my-3 login-page">
      <Form onSubmit={handleRegistration}>
        <h3 className="text-primary">
          PLease {isLogIn ? "Login" : "Register"}
        </h3>

        <Form.Group className="mb-3">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            onBlur={getNameFormValue}
            placeholder="Enter Name"
            className="w-50"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={getEmailFormValue}
            type="email"
            placeholder="Enter email"
            required
            className="w-50"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="w-50"
            onBlur={getPasswordFormValue}
            type="password"
            placeholder="Password"
            required
          />

          <Form.Text className="text-muted">
            <p className="text-danger">{err}</p>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={toggleLogIn}
            type="checkbox"
            label="Already Register ?"
          />
        </Form.Group>

        {isLogIn ? (
          <Button variant="primary" type="submit">
            Login
          </Button>
        ) : (
          <>
            <Button variant="primary mx-2" type="submit">
              Register
            </Button>
            <Button onClick={signInUsingGoogle} variant="primary" type="submit">
              Google Sign In
            </Button>
          </>
        )}
      </Form>
    </div>
  );
};

export default Login;
