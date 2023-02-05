import styled from "styled-components";

export const Title = styled.div<{ first?: boolean }>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: #000000;
  margin: ${({ first }) => (first ? `100px` : "40px")};
  @media (max-width: 600px) {
    margin: 40px;
    font-size: 24px;
  }
`;
