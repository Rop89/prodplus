import React from "react";
import "./styles/tailwind.css";
import "./styles/global.css";
import Routes from "./routes";
import { auth } from "../firebase/firebase";

function App() {
  return <Routes />;
}

export default App;
