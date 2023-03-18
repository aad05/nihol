import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import UseWrapper from "./hooks/useWrapper";
import Root from "./root";
import "./index.css";
import "antd/dist/reset.css";
import Loading from "./components/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loading />}>
    <UseWrapper>
      <Root />
    </UseWrapper>
  </Suspense>
);
