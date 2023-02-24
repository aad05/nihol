import styled from "styled-components";

export const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  cursor: pointer;
  border-radius: 17px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  grid-gap: 20px;
  box-shadow: 6px 6px 7px rgba(0, 0, 0, 0.25);
  @media (max-width: 650px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 350px) {
    width: 120px;
    height: 140px;
  }
`;
Wrapper.Title = styled.div`
  padding-top: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  @media (max-width: 650px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 350px) {
    padding-top: 10px;
  }
`;
Wrapper.Image = styled.img`
  width: 133px;
  height: 192px;
  margin-bottom: 30px;
  @media (max-width: 650px) {
    width: 93px;
    height: 152px;
  }
  @media (max-width: 500px) {
    width: 63px;
    height: 122px;
  }
  @media (max-width: 350px) {
    margin-top: 10px;
  }
`;
