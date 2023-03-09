import { Room } from "../../../../../Generic/Styles";
import { Button, Modal } from "antd";
import { ConfirmMomdalButtonWrapper } from "../Room/style";
import { useDispatch } from "react-redux";
import {
  switchAddBookingModalVisibility,
  switchAddUserModalVisibility,
} from "../../../../../redux/modalSlice";
import { setSelectedUserData } from "../../../../../redux/userSlice";

const { confirm } = Modal;

const EmptyRoom = ({ clienteInfo }) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(
      setSelectedUserData({ ...clienteInfo, mutationBuildingNumber: "6-1" })
    );
    return confirm({
      title: "O'rin bo'sh",
      content:
        "Bu o'rin bo'sh. Yangi foydalanuvchi qo'shish uchun «Qo'shish» tugmasini bosing. Yoki bu joyni band qilish uchun  «Bronlash» tugmasini bosing.",
      closable: true,
      footer: (
        <ConfirmMomdalButtonWrapper>
          <Button
            onClick={() => {
              Modal.destroyAll();
              dispatch(
                switchAddBookingModalVisibility({ loading: false, open: true })
              );
            }}
          >
            Bronlash
          </Button>
          <Button
            onClick={() => {
              Modal.destroyAll();
              dispatch(
                switchAddUserModalVisibility({ loading: false, open: true })
              );
            }}
            type="primary"
          >
            Qo'shish
          </Button>
        </ConfirmMomdalButtonWrapper>
      ),
    });
  };
  return <Room color={"green"} onClick={onClickHandler}></Room>;
};

export default EmptyRoom;
