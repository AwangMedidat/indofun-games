import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import useRegister from "../containers/Register/hooks/useRegister";

function Register() {
  const { formValue, setFormValue, handleSubmit, loading } = useRegister();
  return (
    <Container className="mt-5">
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => {
              setFormValue({ ...formValue, name: e.target.value });
            }}
            value={formValue.name ?? ""}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setFormValue({ ...formValue, email: e.target.value });
            }}
            value={formValue.email ?? ""}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setFormValue({ ...formValue, password: e.target.value });
            }}
            value={formValue.password ?? ""}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 w-100">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
