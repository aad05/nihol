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

const FifthMoveBuilding = () => {
  const [selectedRoomOrder, setSelectedRoomOrder] = useState(0);
  const [selectedFloorOrder, setSelectedFloorOrder] = useState("1");
  const useQuery = useQueryHandler();
  const { isLoading: firstFloor, data: firstFloorData } = useQuery({
    queryKey: "accomodation/5-1",
    queryLink: "/accomodation/5-1/room",
  });
  const { isLoading: secodFloor, data: secondFloorData } = useQuery({
    queryKey: "accomodation/5-2",
    queryLink: "/accomodation/5-2/room",
  });

  const floors = [firstFloorData, secondFloorData];

  return (
    <Wrapper>
      {firstFloor || secodFloor ? (
        <MovingBuildingLoader />
      ) : (
        <>
          <Wrapper.FloorTitle>Qavat sonini tanlang:</Wrapper.FloorTitle>
          <Select
            defaultValue="1"
            onChange={(e) => setSelectedFloorOrder(e)}
            options={[
              { label: "1 qavat", value: "1" },
              { label: "2 qavat", value: "2" },
            ]}
          />
          <Wrapper.FloorTitle>Xona sonini tanlang:</Wrapper.FloorTitle>
          <Select
            defaultValue="1"
            onChange={(e) => setSelectedRoomOrder(e)}
            options={floors[Number(selectedFloorOrder) - 1].map(
              ({ roomOrder, roomNumber }) => ({
                label: `${roomNumber} xona`,
                value: `${roomOrder}`,
              })
            )}
          />
          <Wrapper.RoomTitle>Joylashuvni tanlang:</Wrapper.RoomTitle>
          <MappingRoomWrapper>
            <RoomTitle>
              {
                floors[Number(selectedFloorOrder) - 1][selectedRoomOrder || 0]
                  ?.roomNumber
              }{" "}
              xona
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
                      buildingNumber: `5-${selectedFloorOrder}`,
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
                      buildingNumber: `5-${selectedFloorOrder}`,
                    }}
                  />
                ) : (
                  <BookedRoom
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      buildingNumber: `5-${selectedFloorOrder}`,
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

export default FifthMoveBuilding;
