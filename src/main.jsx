import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHokk";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { HookApp } from "./HooksApp";
// import { FormWihtCustomHook } from "./02-useEffect/FormWihtCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <FocusScreen />
  // {/* </React.StrictMode> */}
);
