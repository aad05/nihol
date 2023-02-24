import { Button, Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./style";
import {
  switchUserModalVisibility,
  switchAddBookingModalVisibility,
} from "../../../../../redux/modalSlice";
import BookedUser from "./BookedUser";
import { useQueryClient } from "react-query";

const Booking = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { selectedUserData } = useSelector((state) => state.user);
  const data = queryClient.getQueryData(
    `accomodation/${selectedUserData?.mutationBuildingNumber}`
  );

  const [clienteData] = data[selectedUserData?.roomOrder].cliente.filter(
    (value) => value.clienteID === selectedUserData?.clienteID
  );
  const [bookedData] = data[selectedUserData?.roomOrder].bookedCliente.filter(
    (value) => value.bookedClienteID === selectedUserData?.clienteID
  );

  return (
    <>
      <Wrapper>
        {!clienteData?.isBooked ? (
          <Result status="404" subTitle="Нет ни одной забронированной даты" />
        ) : (
          bookedData?.bookedClienteList?.map((value) => (
            <BookedUser
              key={value}
              idCollection={{
                _id: value,
                bookedClienteID:
                  selectedUserData?.bookedCliente?.bookedClienteID,
              }}
            />
          ))
        )}
      </Wrapper>
      <Wrapper.InputWrapper
        style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
      >
        <Button onClick={() => dispatch(switchUserModalVisibility())}>
          Отмена
        </Button>
        <Button
          type="primary"
          onClick={() =>
            dispatch(
              switchAddBookingModalVisibility({ loading: false, open: true })
            )
          }
        >
          Добавить брон
        </Button>
      </Wrapper.InputWrapper>
    </>
  );
};

export default Booking;
