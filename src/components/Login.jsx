import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import styled from "styled-components";

import Input from "./Input";

const LoginHeader = styled.div`
  text-align: center;
  font-size: 2rem;
  padding: 1rem 0;
`;

export default function Login() {
  return (
    <Container>
      <Row>
        <Col md={4} />
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <LoginHeader>Login</LoginHeader>
            <Form>
              <Input type="email" placeholder="Email Address" />
            </Form>
          </Card>
        </Col>
        <Col md={4} />
      </Row>
    </Container>
  );
}
