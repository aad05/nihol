import { BookedTag, Room } from "../../../../../Generic/Styles";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { setSelectedUserData } from "../../../../../redux/userSlice";
import { Tooltip } from "antd";

const BookedRoom = ({ clienteInfo }) => {
  const dispatch = useDispatch();
  console.log(clienteInfo);
  return (
    <Room
      color={"processing"}
      onClick={() => {
        dispatch(switchUserModalVisibility());
        dispatch(
          setSelectedUserData({ ...clienteInfo, mutationBuildingNumber: "5-1" })
        );
      }}
    >
      {clienteInfo?.isBooked && (
        <Tooltip placement="top" title="Это место забронировано">
          <BookedTag color="warning">
            <ExclamationCircleOutlined />
          </BookedTag>
        </Tooltip>
      )}
    </Room>
  );
};

export default BookedRoom;
