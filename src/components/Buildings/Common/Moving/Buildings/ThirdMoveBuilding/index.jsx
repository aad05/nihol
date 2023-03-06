import { Select } from "antd";
import React, { useState } from "react";
import {
  MappingRoomContainer,
  MappingRoomWrapper,
  RoomTitle,
} from "../../../../../../Generic/Styles";
import useQueryHandler from "../../../../../../hooks/useQuery";
import { Wrapper } from "../style";
import EmptyRoom from "../Common/EmptyRoom";
import BookedRoom from "../Common/BookedRoom";
import RoomComponent from "../Common/Room";
import { MovingBuildingLoader } from "../../../../../../Generic/Loaders";

const SecondMoveBuilding = () => {
  const [selectedRoomOrder, setSelectedRoomOrder] = useState(0);
  const useQuery = useQueryHandler();
  const { isLoading, data } = useQuery({
    queryKey: "accomodation/3",
    queryLink: "/accomodation/3/room",
  });

  return (
    <Wrapper>
      {isLoading ? (
        <MovingBuildingLoader />
      ) : (
        <>
          <Wrapper.RoomTitle>Выберите номер комната:</Wrapper.RoomTitle>
          <Select
            defaultValue="0"
            onChange={(e) => setSelectedRoomOrder(e)}
            options={data.map(({ roomOrder, roomNumber }) => ({
              label: `${roomNumber} комната`,
              value: `${roomOrder}`,
            }))}
          />
          <Wrapper.RoomTitle>Выберите положения:</Wrapper.RoomTitle>
          <MappingRoomWrapper>
            <RoomTitle>
              {data[selectedRoomOrder || 0]?.roomNumber} комната
            </RoomTitle>
            <MappingRoomContainer>
              {data[selectedRoomOrder || 0]?.cliente?.map((value) =>
                !value.userID && !value.isBooked ? (
                  <EmptyRoom
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      buildingNumber: "3",
                      roomNumber: data[selectedRoomOrder || 0].roomNumber,
                    }}
                  />
                ) : value.userID ? (
                  <RoomComponent
                    key={value?.clienteID}
                    clienteInfo={{ ...value, buildingNumber: "3" }}
                  />
                ) : (
                  <BookedRoom
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      buildingNumber: "3",
                      roomNumber: data[selectedRoomOrder || 0].roomNumber,
                    }}
                  />
                )
              )}
            </MappingRoomContainer>
          </MappingRoomWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default SecondMoveBuilding;
