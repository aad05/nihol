import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
Wrapper.MapWrapper = styled.div`
  width: 650px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 10px;
  @media (max-width: 650px) {
    width: 100%;
  }
  @media (max-width: 350px) {
    width: 300px;
  }
`;
