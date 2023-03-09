import { BookedTag, Room } from "../../../../../Generic/Styles";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { setSelectedUserData } from "../../../../../redux/userSlice";
import { Tooltip } from "antd";

const BookedRoom = ({ clienteInfo }) => {
  const dispatch = useDispatch();
  return (
    <Room
      color={"processing"}
      onClick={() => {
        dispatch(switchUserModalVisibility());
        dispatch(
          setSelectedUserData({ ...clienteInfo, mutationBuildingNumber: "6-1" })
        );
      }}
    >
      {clienteInfo?.isBooked && (
        <Tooltip placement="top" title="Bu yer bronlangan!">
          <BookedTag color="warning">
            <ExclamationCircleOutlined />
          </BookedTag>
        </Tooltip>
      )}
    </Room>
  );
};

export default BookedRoom;
