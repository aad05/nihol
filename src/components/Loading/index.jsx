import { Wrapper } from "./style";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
  return (
    <Wrapper>
      <LoadingOutlined style={{ fontSize: "5vh", marginBottom: "30px" }} />
      <Wrapper.Title>Sayt yuklanmoqda...</Wrapper.Title>
    </Wrapper>
  );
};

export default Loading;
