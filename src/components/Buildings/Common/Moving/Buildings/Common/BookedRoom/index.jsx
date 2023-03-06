import { BookedTag, Room } from "../../../../../../../Generic/Styles";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const BookedRoom = ({ clienteInfo }) => {
  return (
    <Room color={"processing"}>
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
