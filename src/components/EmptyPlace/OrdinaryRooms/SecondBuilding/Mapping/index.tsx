import { FC } from "react";
import { useAppDispatch } from "../../../../../hooks/useRedux";
import { setSelectedRoom } from "../../../../../redux/secondBuildingSlice";
import Room from "./Room";
import { Wrapper } from "./style";

interface MappingType {
  data?: [];
}
interface RoomType {
  _id: string;
  roomNumber: string;
  cliente: [];
}
interface ClienteType {
  isBooked?: Boolean;
  userID?: string;
  clienteID: string;
}
const Mapping: FC<MappingType> = ({ data }) => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Wrapper.Container>
        {data?.map((roomValue: RoomType) => (
          <Wrapper.RoomWrapper key={roomValue?._id}>
            <Wrapper.RoomTitle>
              {roomValue?.roomNumber} комната
            </Wrapper.RoomTitle>
            <Wrapper.RoomContainer>
              {roomValue?.cliente?.map((value: ClienteType) => (
                <Room
                  onClick={() =>
                    dispatch(
                      setSelectedRoom({
                        buildingNumber: "2",
                        roomNumber: roomValue?.roomNumber,
                        clienteID: value?.clienteID,
                        roomID: roomValue?._id,
                      })
                    )
                  }
                  key={value?.clienteID}
                  clienteInfo={value}
                ></Room>
              ))}
            </Wrapper.RoomContainer>
          </Wrapper.RoomWrapper>
        ))}
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Mapping;

/*

<Wrapper>
      <Title>1 этаж</Title>
      <Wrapper.Container>
        <Wrapper.RoomWrapper>
          <Wrapper.RoomTitle>1 комната</Wrapper.RoomTitle>
          <Wrapper.RoomContainer>
            <Room>A</Room>
            <Room>D</Room>
          </Wrapper.RoomContainer>
        </Wrapper.RoomWrapper>
        <Wrapper.RoomWrapper>
          <Wrapper.RoomTitle>2 комната</Wrapper.RoomTitle>
          <Wrapper.RoomContainer>
            <Room>A</Room>
            <Room>D</Room>
          </Wrapper.RoomContainer>
        </Wrapper.RoomWrapper>
        <Wrapper.RoomWrapper>
          <Wrapper.RoomTitle>3 комната</Wrapper.RoomTitle>
          <Wrapper.RoomContainer>
            <Room>A</Room>
            <Room>D</Room>
          </Wrapper.RoomContainer>
        </Wrapper.RoomWrapper>
        <Wrapper.RoomWrapper>
          <Wrapper.RoomTitle>4 комната</Wrapper.RoomTitle>
          <Wrapper.RoomContainer>
            <Room>A</Room>
            <Room>D</Room>
          </Wrapper.RoomContainer>
        </Wrapper.RoomWrapper>
        <Wrapper.RoomWrapper>
          <Wrapper.RoomTitle>5 комната</Wrapper.RoomTitle>
          <Wrapper.RoomContainer>
            <Room>A</Room>
            <Room>B</Room>
            <Room>T</Room>
          </Wrapper.RoomContainer>
        </Wrapper.RoomWrapper>
      </Wrapper.Container>
    </Wrapper>
*/

/*
 {/* {data?.rooms.map(({ rooms, floorID, floorNumber }: BuildingFloorType) => (
        <Wrapper key={floorID}>
          <Title>{`${floorNumber} этаж`}</Title>
          <Wrapper.Container>
            {rooms.map((value: FloorRoomType, index) => (
              <Wrapper.RoomWrapper key={index}>
                <Wrapper.RoomTitle>
                  {value.roomNumber} комната
                </Wrapper.RoomTitle>
                <Wrapper.RoomContainer>
                  {value?.cliente?.map(
                    (
                      clienteInfo: { clienteID: any; isBooked: Boolean },
                      index: Number
                    ) => (
                      <Room
                        key={clienteInfo?.clienteID}
                        clienteInfo={clienteInfo}
                        floorID={floorID}
                      >{`${+index.toFixed() + 1}`}</Room>
                    )
                  )}
                </Wrapper.RoomContainer>
              </Wrapper.RoomWrapper>
            ))}
          </Wrapper.Container>
        </Wrapper>
      ))} 
*/
