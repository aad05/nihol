import { Button, Modal } from "antd";
import { Wrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "react-query";
import { useDelete } from "../../../../../hooks/useQuery/useBuildingActions";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import VoucherUser from "../../../Common/User/Observing/VoucherUser";
import RegularUser from "../../../Common/User/Observing/RegularUser";
import EmptyUser from "../EmptyUser";

const { confirm } = Modal;

const Observing = () => {
  const { mutate: deleteMutate } = useDelete();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { selectedUserData } = useSelector((state) => state.user);
  const data = queryClient.getQueryData(`user/${selectedUserData?.userID}`);
  const accomodationData = queryClient.getQueryData(
    `accomodation/${selectedUserData.mutationBuildingNumber}`
  );

  const [clienteData] = accomodationData[
    selectedUserData?.roomOrder
  ].cliente.filter((value) => value.clienteID === selectedUserData?.clienteID);

  const onDelete = () => {
    return confirm({
      title: "Убеждаться!",
      content: "Это действие нельзя отменить после подтверждения удаления.",
      cancelText: "Отмена",
      okText: "Удалить",
      onOk: () => {
        deleteMutate(data);
        dispatch(switchUserModalVisibility());
      },
    });
  };

  return (
    <Wrapper>
      {!clienteData?.userID ? (
        <EmptyUser />
      ) : data?.hasVoucher ? (
        <VoucherUser />
      ) : (
        <RegularUser />
      )}
      {clienteData?.userID && (
        <Wrapper.InputWrapper
          style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
        >
          <Button onClick={() => dispatch(switchUserModalVisibility())}>
            Отмена
          </Button>
          <Button danger type="primary" onClick={onDelete}>
            Удалить
          </Button>
        </Wrapper.InputWrapper>
      )}
    </Wrapper>
  );
};

export default Observing;
