import ReactDOM from "react-dom/client";
import "./index.css";
import Wrapper from "./hooks/Wrapper";
import Root from "./root";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Wrapper>
    <Root />
  </Wrapper>
);
