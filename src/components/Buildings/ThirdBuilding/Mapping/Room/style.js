import { Modal } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div``;
export const ConfirmMomdalButtonWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: end;
  grid-gap: 20px;
`;
export const CustomModal = styled(Modal)`
  .modal-backdrop .fade {
    opacity: 0;
    filter: alpha(opacity=0);
  }
  .modal-backdrop .in {
    opacity: 0.5;
    filter: alpha(opacity=50);
  }
  .modal-backdrop .fade {
    opacity: 0;
    filter: alpha(opacity=0);
  }
  .modal-backdrop .fade .in {
    opacity: 0.5;
    filter: alpha(opacity=50);
  }
`;
