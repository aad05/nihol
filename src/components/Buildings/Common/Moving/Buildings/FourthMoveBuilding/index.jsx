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
import { useTranslation } from "react-i18next";

const SecondMoveBuilding = () => {
  const { t } = useTranslation();
  const [selectedRoomOrder, setSelectedRoomOrder] = useState(0);
  const useQuery = useQueryHandler();
  const { isLoading, data } = useQuery({
    queryKey: "accomodation/4",
    queryLink: "/accomodation/4/room",
  });

  return (
    <Wrapper>
      {isLoading ? (
        <MovingBuildingLoader />
      ) : (
        <>
          <Wrapper.RoomTitle>{t("moveModal.roomSelection")}:</Wrapper.RoomTitle>
          <Select
            defaultValue="0"
            onChange={(e) => setSelectedRoomOrder(e)}
            options={data?.map(({ roomOrder, roomNumber }) => ({
              label: `${roomNumber} ${t("building.room")}`,
              value: `${roomOrder}`,
            }))}
          />
          <Wrapper.RoomTitle>
            {" "}
            {t("moveModal.positionSelection")}:
          </Wrapper.RoomTitle>
          <MappingRoomWrapper>
            <RoomTitle>
              {data[selectedRoomOrder || 0]?.roomNumber} {t("building.room")}
            </RoomTitle>
            <MappingRoomContainer>
              {data[selectedRoomOrder || 0]?.cliente?.map((value) =>
                !value.userID && !value.isBooked ? (
                  <EmptyRoom
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      buildingNumber: "4",
                      roomNumber: data[selectedRoomOrder || 0].roomNumber,
                    }}
                  />
                ) : value.userID ? (
                  <RoomComponent
                    key={value?.clienteID}
                    clienteInfo={{ ...value, buildingNumber: "4" }}
                  />
                ) : (
                  <BookedRoom
                    key={value?.clienteID}
                    clienteInfo={{
                      ...value,
                      buildingNumber: "4",
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
