import { Button, Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./style";
import {
  switchUserModalVisibility,
  switchAddBookingModalVisibility,
} from "../../../../../redux/modalSlice";
import BookedUser from "./BookedUser";
import { useQueryClient } from "react-query";
import { useTranslation } from "react-i18next";

const Booking = () => {
  const { t } = useTranslation();
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
          <Result status="404" subTitle={t("confirm.noBookedPlaces")} />
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
          {t("modal.modal_canceling")}
        </Button>
        <Button
          type="primary"
          onClick={() =>
            dispatch(
              switchAddBookingModalVisibility({ loading: false, open: true })
            )
          }
        >
          {t("modal.modal_add")}
        </Button>
      </Wrapper.InputWrapper>
    </>
  );
};

export default Booking;
