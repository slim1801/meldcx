import React, { useCallback, useState } from "react";
import Login from "./Login";
import DevicesScreen from "./DevicesScreen";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUnlockAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faUnlockAlt, faEnvelope);

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const onLogin = async ({ email, password }) => {
    const response = await fetch("http://35.201.2.209:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (response.status === 200) {
      const token = await response.text();
      sessionStorage.setItem("access_token", token);
      forceUpdate();
    } else if (response.status === 401) {
      const responseMessage = await response.text();
      setErrorMessage(responseMessage);
    }
  };

  const onLogout = () => {
    sessionStorage.removeItem("access_token");
    forceUpdate();
  };

  const accessToken = sessionStorage.getItem("access_token");

  return (
    <>
      {!accessToken ? (
        <Login
          onLogin={onLogin}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      ) : (
        <DevicesScreen onLogout={onLogout} />
      )}
    </>
  );
}
