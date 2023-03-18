import { BookedTag, Room } from "../../../../../Generic/Styles";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { setSelectedUserData } from "../../../../../redux/userSlice";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

const BookedRoom = ({ clienteInfo }) => {
  const { t } = useTranslation();
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
        <Tooltip placement="top" title={t("booking.title")}>
          <BookedTag color="warning">
            <ExclamationCircleOutlined />
          </BookedTag>
        </Tooltip>
      )}
    </Room>
  );
};

export default BookedRoom;
