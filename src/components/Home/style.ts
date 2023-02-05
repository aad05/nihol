import styled from "styled-components";

export const Wrapper: any = styled.div`
  width: 100%;
`;
Wrapper.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
Wrapper.SectionCardContainer = styled.div`
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
