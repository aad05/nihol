import { Tag } from "antd";
import styled from "styled-components";

export const Wrapper: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
  border-radius: 12px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 6px 6px 7px rgba(0, 0, 0, 0.25);
`;
Wrapper.Container = styled.div`
  width: 290px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
`;

Wrapper.RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #939596;
  border-radius: 12px;
`;
Wrapper.RoomContainer = styled.div`
  margin: 10px auto;
  width: 120px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  grid-gap: 10px;
`;
Wrapper.RoomTitle = styled.div`
  margin-top: 10px;
`;
Wrapper.Room = styled(Tag)`
  position: relative;
  margin: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
`;
Wrapper.BookedTag = styled(Tag)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: -15px;
`;
