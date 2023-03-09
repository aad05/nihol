import { Modal } from "antd";
import { useSelector } from "react-redux";
import { Room } from "../../../../../../../Generic/Styles";
import { useMove } from "../../../../../../../hooks/useQuery/useBuildingActions";

const { confirm } = Modal;

const EmptyRoom = ({ clienteInfo }) => {
  const { mutate } = useMove();
  const { movingUserData } = useSelector((state) => state.user);
  const moveConfirm = () => {
    return confirm({
      type: "info",
      title: "Вы уверены ?!",
      content: "Что вы хотите переместить пользователя?",
      cancelText: "Bekor qilish",
      okText: "Я уверен",
      onOk: () => {
        mutate({
          newAccomodationID: clienteInfo.buildingNumber,
          newClienteID: clienteInfo.clienteID,
          newRoomNumber: clienteInfo.roomNumber,
          ...movingUserData,
        });
      },
    });
  };
  return <Room color={"green"} onClick={moveConfirm}></Room>;
};

export default EmptyRoom;
