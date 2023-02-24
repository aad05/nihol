import { Tag } from "antd";
import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: #000000;
  margin: 40px;
  @media (max-width: 600px) {
    margin: 40px;
    font-size: 24px;
  }
  @media (max-width: 400px) {
    margin: 40px;
    font-size: 18px;
  }
`;
export const MappingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
  border-radius: 12px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 6px 6px 7px rgba(0, 0, 0, 0.25);
  margin-top: 40px;
`;
export const MappingContainer = styled.div`
  width: 290px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
`;
export const MappingRoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #939596;
  border-radius: 12px;
`;
export const MappingRoomContainer = styled.div`
  margin: 10px auto;
  width: 120px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  grid-gap: 10px;
`;
export const FloorTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 77px;
  color: #000000;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;
export const RoomTitle = styled.div`
  margin-top: 10px;
`;
export const Room = styled(Tag)`
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
export const BookedRoom = styled(Tag)`
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
export const SectionCardContainer = styled.div`
  margin: 30px auto;
  width: fit-content;
  display: flex;
  grid-gap: 150px;
  @media (max-width: 800px) {
    grid-gap: 75px;
  }
  @media (max-width: 500px) {
    grid-gap: 37.5px;
  }
  @media (max-width: 270px) {
    flex-direction: column;
    grid-gap: 10px;
    margin: 10px auto;
  }
`;
export const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BookedTag = styled(Tag)`
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
export const IconCircleWrapper = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: #f5f5f5;
  }
`;
