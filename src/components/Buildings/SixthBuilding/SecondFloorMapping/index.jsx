import {
  FloorTitle,
  MappingContainer,
  MappingRoomContainer,
  MappingRoomWrapper,
  MappingWrapper,
  RoomTitle,
} from "../../../../Generic/Styles";
import { useQueryClient } from "react-query";
import RoomComponent from "./Room";
import EmptyRoom from "./EmptyRoom";
import BookedRoom from "./BookedRoom";
import { Alert } from "antd";
import { useTranslation } from "react-i18next";

const SecondBuildingMapping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/6-2");

  return (
    <MappingWrapper>
      <FloorTitle>2 {t("building.floor")}</FloorTitle>
      {!data && <Alert message="Сервер не может ответить!" type="error" />}
      <MappingContainer>
        {data?.map((roomValue) => (
          <MappingRoomWrapper key={roomValue?._id}>
            <RoomTitle>
              {roomValue?.roomNumber} {t("building.room")}
            </RoomTitle>
            <MappingRoomContainer>
              {roomValue?.cliente?.map((value, index) =>
                !value.userID && !value.isBooked ? (
                  <EmptyRoom
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      roomNumber: roomValue?.roomNumber,
                      roomOrder: roomValue?.roomOrder,
                      roomID: roomValue._id,
                      bookedCliente: roomValue?.bookedCliente[index],
                      cliente: roomValue?.cliente[index],
                    }}
                  />
                ) : value.userID ? (
                  <RoomComponent
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      roomNumber: roomValue?.roomNumber,
                      roomOrder: roomValue?.roomOrder,
                      roomID: roomValue._id,
                      bookedCliente: roomValue?.bookedCliente[index],
                      cliente: roomValue?.cliente[index],
                    }}
                  />
                ) : (
                  <BookedRoom
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      roomNumber: roomValue?.roomNumber,
                      roomOrder: roomValue?.roomOrder,
                      roomID: roomValue._id,
                      bookedCliente: roomValue?.bookedCliente[index],
                      cliente: roomValue?.cliente[index],
                    }}
                  />
                )
              )}
            </MappingRoomContainer>
          </MappingRoomWrapper>
        ))}
      </MappingContainer>
    </MappingWrapper>
  );
};

export default SecondBuildingMapping;
