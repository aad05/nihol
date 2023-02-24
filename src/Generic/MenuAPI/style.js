import styled from "styled-components";

export const Wrapper = styled.div``;

Wrapper.MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Wrapper.MenuItemText = styled.div`
  width: 100%;
  color: ${({ danger }) => (danger ? "red" : "#000")};
`;
