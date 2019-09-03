import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styled from "styled-components";

import Input from "./Input";

const LoginContainer = styled.div`
  background-color: #2c3e50;
  height: 100%;
`;

const FormContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginHeader = styled.div`
  text-align: center;
  font-size: 2rem;
  padding: 1rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  padding: 1rem 0;
`;

export default function Login({ errorMessage, setErrorMessage, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LoginContainer>
      <FormContainer>
        <Card style={{ width: "18rem", padding: "1rem 0" }}>
          <LoginHeader>Login</LoginHeader>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Form onSubmit={() => onLogin({ email, password })}>
            <Input
              type="email"
              icon="envelope"
              value={email}
              onChange={event => {
                errorMessage && setErrorMessage(null);
                setEmail(event.target.value);
              }}
              placeholder="Email Address"
            />
            <Input
              type="password"
              icon="unlock-alt"
              value={password}
              onChange={event => {
                errorMessage && setErrorMessage(null);
                setPassword(event.target.value);
              }}
              placeholder="Password"
            />
            <ButtonContainer>
              <Button variant="primary" type="submit">
                LOG IN
              </Button>
            </ButtonContainer>
          </Form>
        </Card>
      </FormContainer>
    </LoginContainer>
  );
}
