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
      setSelectedUserData({ ...clienteInfo, mutationBuildingNumber: "cottage" })
    );
    return confirm({
      title: "Пустое место",
      content:
        "Это место пусто. Нажмите «Добавить», чтобы добавить нового пользователя. Или нажмите «Забронировать», чтобы забронировать это место.",
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
            Забронировать
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
            Добавить
          </Button>
        </ConfirmMomdalButtonWrapper>
      ),
    });
  };
  return <Room color={"green"} onClick={onClickHandler}></Room>;
};

export default EmptyRoom;
