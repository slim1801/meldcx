import React from "react";
import Login from "./Login";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUnlockAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faUnlockAlt, faEnvelope);

export default function App() {
  return <Login />;
}
