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

const SixthMoveBuilding = () => {
  const [selectedRoomOrder, setSelectedRoomOrder] = useState(0);
  const [selectedFloorOrder, setSelectedFloorOrder] = useState("1");
  const useQuery = useQueryHandler();
  const { isLoading: firstFloor, data: firstFloorData } = useQuery({
    queryKey: "accomodation/6-1",
    queryLink: "/accomodation/6-1/room",
  });
  const { isLoading: secodFloor, data: secondFloorData } = useQuery({
    queryKey: "accomodation/6-2",
    queryLink: "/accomodation/6-2/room",
  });
  const { isLoading: thirdFloor, data: thirdFloorData } = useQuery({
    queryKey: "accomodation/6-3",
    queryLink: "/accomodation/6-3/room",
  });

  const floors = [firstFloorData, secondFloorData, thirdFloorData];

  return (
    <Wrapper>
      {firstFloor || secodFloor || thirdFloor ? (
        <MovingBuildingLoader />
      ) : (
        <>
          <Wrapper.FloorTitle>Выберите номер этажа:</Wrapper.FloorTitle>
          <Select
            defaultValue="1"
            onChange={(e) => setSelectedFloorOrder(e)}
            options={[
              { label: "1 этаж", value: "1" },
              { label: "2 этаж", value: "2" },
              { label: "3 этаж", value: "3" },
            ]}
          />
          <Wrapper.FloorTitle>Выберите номер комната:</Wrapper.FloorTitle>
          <Select
            defaultValue="1"
            onChange={(e) => setSelectedRoomOrder(e)}
            options={floors[Number(selectedFloorOrder) - 1].map(
              ({ roomOrder, roomNumber }) => ({
                label: `${roomNumber} комната`,
                value: `${roomOrder}`,
              })
            )}
          />
          <Wrapper.RoomTitle>Выберите положения:</Wrapper.RoomTitle>
          <MappingRoomWrapper>
            <RoomTitle>
              {
                floors[Number(selectedFloorOrder) - 1][selectedRoomOrder || 0]
                  ?.roomNumber
              }{" "}
              комната
            </RoomTitle>
            <MappingRoomContainer>
              {floors[Number(selectedFloorOrder) - 1][
                selectedRoomOrder || 0
              ]?.cliente?.map((value) =>
                !value.userID && !value.isBooked ? (
                  <EmptyRoom
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      buildingNumber: `6-${selectedFloorOrder}`,
                      roomNumber:
                        floors[Number(selectedFloorOrder) - 1][
                          selectedRoomOrder || 0
                        ].roomNumber,
                    }}
                  />
                ) : value.userID ? (
                  <RoomComponent
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      buildingNumber: `6-${selectedFloorOrder}`,
                    }}
                  />
                ) : (
                  <BookedRoom
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      buildingNumber: `6-${selectedFloorOrder}`,
                      roomNumber:
                        floors[Number(selectedFloorOrder) - 1][
                          selectedRoomOrder || 0
                        ].roomNumber,
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

export default SixthMoveBuilding;
