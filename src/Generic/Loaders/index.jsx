import { Spin } from "antd";
import { Wrapper } from "./style";

export const MovingBuildingLoader = () => {
  return (
    <Wrapper>
      <Spin />
      <Wrapper.Title>Загрузка...</Wrapper.Title>
    </Wrapper>
  );
};
