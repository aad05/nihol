import styled from "styled-components";

export const Wrapper = styled.div`
  height: 600px;
  overflow: auto;
`;

Wrapper.InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
`;
Wrapper.InputWrapper = styled.div`
  margin-top: 20px;
`;
Wrapper.Label = styled.div`
  flex: 1;
  text-align: start;
`;
Wrapper.Text = styled.div`
  flex: 1;
  text-align: start;
`;
