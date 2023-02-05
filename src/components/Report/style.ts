import styled from "styled-components";

export const Wrapper: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
Wrapper.ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  overflow-y: hidden;
  width: 80%;
  margin: 0 20px;
`;
Wrapper.Title = styled.div`
  white-space: nowrap;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: #000000;
  @media (max-width: 600px) {
    margin: 40px;
    font-size: 24px;
  }
`;
