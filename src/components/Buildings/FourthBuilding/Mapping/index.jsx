import {
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
import ModalVisibility from "../../Common/ModalVisibility";

const SecondBuildingMapping = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/4");

  return (
    <MappingWrapper>
      <ModalVisibility />
      <MappingContainer>
        {data?.map((roomValue) => (
          <MappingRoomWrapper key={roomValue?._id}>
            <RoomTitle>{roomValue?.roomNumber} комната</RoomTitle>
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