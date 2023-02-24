import { BookedTag, Room } from "../../../../../Generic/Styles";
import dayjs from "dayjs";
import useQueryHandler from "../../../../../hooks/useQuery";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { setSelectedUserData } from "../../../../../redux/userSlice";
import { Tooltip } from "antd";

const RoomComponent = ({ clienteInfo }) => {
  const dispatch = useDispatch();
  const useQuery = useQueryHandler();

  const { data, isLoading } = useQuery({
    queryLink: `/accomodation/6-2/user?_id=${clienteInfo?.userID}`,
    queryKey: `user/${clienteInfo?.userID}`,
    method: "GET",
  });

  return (
    <Room
      color={clienteInfo.userID ? "red" : "processing"}
      onClick={() => {
        if (!isLoading) {
          dispatch(switchUserModalVisibility());
          dispatch(
            setSelectedUserData({
              ...clienteInfo,
              mutationBuildingNumber: "6-2",
            })
          );
        }
      }}
    >
      {clienteInfo?.isBooked && (
        <Tooltip placement="top" title="Это место забронировано">
          <BookedTag color="warning">
            <ExclamationCircleOutlined />
          </BookedTag>
        </Tooltip>
      )}
      {isLoading && <LoadingOutlined />}
      {!isLoading &&
        clienteInfo.userID &&
        dayjs(Number(data?.endDate)).diff(new Date(), "d")}
    </Room>
  );
};

export default RoomComponent;
