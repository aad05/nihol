import React from "react";
import ReactDOM from "react-dom/client";
import UseWrapper from "./hooks/useWrapper";
import Root from "./root";
import "./index.css";
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UseWrapper>
    <Root />
  </UseWrapper>
);
