import { Button, Modal } from "antd";
import { Wrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "react-query";
import { useDelete } from "../../../../../hooks/useQuery/useBuildingActions";
import {
  switchMovingModalVisibility,
  switchUserModalVisibility,
} from "../../../../../redux/modalSlice";
import { setMovingUserData } from "../../../../../redux/userSlice";
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
      title: "Ishonch hosil qiling!",
      content: "Oʻchirish tasdiqlangach, bu amalni ortga qaytarib boʻlmaydi.",
      cancelText: "Bekor qilish",
      okText: "O'chirish",
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
            Bekor qilish
          </Button>
          <Button
            type="primary"
            onClick={() => {
              dispatch(
                switchMovingModalVisibility({ open: true, loading: false })
              );
              dispatch(
                setMovingUserData({
                  mutationBuildingNumber:
                    selectedUserData.mutationBuildingNumber,
                  oldRoomNumber: selectedUserData.roomNumber,
                  oldClienteID: selectedUserData.clienteID,
                  _id: selectedUserData.userID,
                })
              );
            }}
          >
            Ko'chrish
          </Button>
          <Button danger type="primary" onClick={onDelete}>
            O'chirish
          </Button>
        </Wrapper.InputWrapper>
      )}
    </Wrapper>
  );
};

export default Observing;
