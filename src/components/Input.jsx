import React from "react";
import Form from "react-bootstrap/Form";

import styled from "styled-components";

const InputContainer = styled.div`
  padding: 1rem;
  position: relative;
`;

export default function Input({ placeholder, type }) {
  return (
    <InputContainer>
      <Form.Control type={type} placeholder={placeholder} />
    </InputContainer>
  );
}
