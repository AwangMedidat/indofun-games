import React, { useState } from "react";
import { Form, Button, Container, InputGroup, FormControl } from "react-bootstrap";
import useLogin from "../containers/Login/hooks/useLogin";
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';

function Login() {
  const { formValue, setFormValue, handleSubmit, loading } = useLogin();

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
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
          Login
        </Button>
        <p>Have an account ? <a href="/register" class="text-decoration-none">Click Here</a></p>
      </Form>
    </Container>
  );
}

export default Login;
