import React from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const InputContainer = styled.div`
  margin: 0 1rem 1rem 1rem;
  position: relative;
`;

const FontAwesomeIconContainer = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translate(0, -50%);
`;

const InputControl = styled(Form.Control)`
  padding-left: 2.5rem;
`;

export default function Input({ placeholder, icon, type, onChange }) {
  return (
    <InputContainer>
      <FontAwesomeIconContainer icon={icon} />
      <InputControl type={type} placeholder={placeholder} onChange={onChange} />
    </InputContainer>
  );
}
