import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "react-bootstrap/Button";

const DevicesScreenContainer = styled.div`
  background-color: #f97f51;
  height: 100%;
  display: flex;
  flex-flow: column;
`;

const DevicesScreenContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DevicesScreenFooter = styled.div`
  background-color: #e55039;
  display: flex;
  flex-flow: row;
  justify-content: center;
  padding: 1rem 0;
`;

function rotate(props) {
  return keyframes`
    from {
      transform: rotate(0deg) translate(${props.radius * props.multiplier}rem);
    }
  
    to {
      transform: rotate(360deg) translate(${props.radius *
        props.multiplier}rem);
    }
  `;
}

const RotatingCircles = styled.div`
  background-color: white;
  height: ${props => props.radius}rem;
  width: ${props => props.radius}rem;
  border-radius: ${props => props.radius}rem;
  animation: ${rotate} 10s linear infinite;
  position: absolute;
`;

const DeviceTextContainer = styled.div`
  text-align: center;
  color: white;
`;

const DeviceTextNumber = styled.div`
  font-size: 3rem;
`;

export default function DevicesScreen({ onLogout }) {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    const callAPI = async () => {
      const response = await fetch("http://35.201.2.209:8000/devices", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      if (response.status === 200) {
        const responseJson = await response.json();
        setDevices(responseJson.devices);
      }
    };

    callAPI();
    setInterval(() => callAPI(), 5000);
  }, []);

  const onNotify = async () => {
    const response = await fetch("http://35.201.2.209:8000/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Sam Lim",
        email: "samuel.lim1801@gmail.com",
        repoUrl: "https://github.com/slim1801/meldcx",
        message:
          "The past, the present and the future walked into a bar. It was tense"
      })
    });
    if (response.status === 200) {
      console.log("NOTIFIED");
    } else {
      console.log("OH NO, SOMETHING WENT WRONG");
    }
  };

  return (
    <DevicesScreenContainer>
      <DevicesScreenContent>
        <DeviceTextContainer>
          <DeviceTextNumber>{devices.length}</DeviceTextNumber>
          <div>
            <b>DEVICES</b>
          </div>
          <div>
            <b>ONLINE</b>
          </div>
        </DeviceTextContainer>
        <RotatingCircles radius={4} multiplier={3} />
        <RotatingCircles radius={4} multiplier={-3} />
      </DevicesScreenContent>
      <DevicesScreenFooter>
        <Button
          style={{ marginRight: "1rem" }}
          variant="light"
          onClick={onNotify}
        >
          NOTIFY
        </Button>
        <Button variant="dark" onClick={onLogout}>
          LOG OUT
        </Button>
      </DevicesScreenFooter>
    </DevicesScreenContainer>
  );
}
fetch("http://35.201.2.209:8000/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "test@test.com", password: "meld123" })
})
  .then(res => res.text())
  .then(res => console.log(res));
