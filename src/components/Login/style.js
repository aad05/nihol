import styled from "styled-components";
import { Input } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

// Right Designing
Wrapper.Right = styled.div`
  flex: 1;
  background: #fff;
`;
Wrapper.Right.Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1000px) {
    width: fit-content;
    margin: 0 auto;
  }
  @media (min-width: 600px) {
    padding: 0 20% 0 20%;
  }
`;
Wrapper.Logo = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 1px solid #f3f5f8;
  @media (min-width: 2000px) {
    height: 140px;
    width: 140px;
  }
`;
Wrapper.Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
  color: #39384d;
  @media (min-width: 2000px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;
Wrapper.Description = styled.div`
  margin-top: ${({ none }) => !none && "10px"};
  color: #b2b0b8;
  text-align: ${({ none }) => !none && "center"};
  width: 80%;
  @media (min-width: 2000px) {
    font-size: 20px;
  }
`;
Wrapper.Input = styled(Input)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: #fafbfe;
  outline: none;
  border: 1px solid #f0eef7;
  border-radius: 12px;
  padding-left: 15px;
  color: #595a62;
  .ant-input {
    border: none;
    background-color: transparent;
    outline: none;
  }
  .ant-input-group-addon {
    border: none;
    background-color: transparent;
  }
  :hover {
    color: #5f95ec;
  }
  @media (min-width: 2000px) {
    height: 70px;
    font-size: 22px;
  }
`;

Wrapper.InputPassword = styled(Input.Password)`
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: #fafbfe;
  outline: none;
  border: 1px solid #f0eef7;
  border-radius: 12px;
  padding-left: 15px;
  color: #595a62;
  .ant-input {
    border: none;
    background-color: transparent;
    outline: none;
  }
  :hover {
    color: #5f95ec;
  }
  @media (min-width: 2000px) {
    height: 70px;
    font-size: 22px;
  }
`;
Wrapper.Scanner = styled.div`
  margin-top: ${({ login }) => (login ? "50px" : "15px")};
  width: 80%;
  height: 50px;
  border: 1px solid #f0eef7;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  padding: 0 15px;
  background: ${({ login }) =>
    login ? "#3068CC" : "linear-gradient(-30deg, #4d18ff, #9a7cff)"};
  @media (min-width: 2000px) {
    height: 70px;
    font-size: 22px;
  }
  ${({ warningAnimation }) =>
    warningAnimation &&
    `
    animation: rotate 0.7s ease-in-out both;
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  `}
`;
