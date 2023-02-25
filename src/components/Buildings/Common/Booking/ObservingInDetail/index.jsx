import { Modal } from "antd";
import { Wrapper } from "../style";
import { useDispatch, useSelector } from "react-redux";
import { switchBookedUserDetailedModalVisibility } from "../../../../../redux/modalSlice";
import { buildingDetecter } from "../../../../../Generic/InputAPI";

const InDetail = () => {
  const dispatch = useDispatch();
  const rtl = new Intl.DateTimeFormat();
  const { selectedBookedData } = useSelector((state) => state.user);
  const { bookedUserDetailedModalVisibility } = useSelector(
    (state) => state.modal
  );

  return (
    <Modal
      open={bookedUserDetailedModalVisibility}
      title="Детальная информация"
      onCancel={() => dispatch(switchBookedUserDetailedModalVisibility())}
      footer={false}
    >
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Полное имя:</Wrapper.Label>
          <Wrapper.Text>{selectedBookedData?.fullName}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Номер телефона:</Wrapper.Label>
          <Wrapper.Text>+998{selectedBookedData?.phoneNumber}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Адрес:</Wrapper.Label>
          <Wrapper.Text>{selectedBookedData?.address}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Дата прибытия:</Wrapper.Label>
          <Wrapper.Text>
            {rtl.format(selectedBookedData?.arrivalDate)}
          </Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Дата окончания:</Wrapper.Label>
          <Wrapper.Text>{rtl.format(selectedBookedData?.endDate)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Предоплата:</Wrapper.Label>
          <Wrapper.Text>{selectedBookedData?.prePaid}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Номер расположенного здание:</Wrapper.Label>
          <Wrapper.Text>
            {buildingDetecter(selectedBookedData?.buildingNumber)}
          </Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Номер расположенного комната:</Wrapper.Label>
          <Wrapper.Text>{selectedBookedData?.roomNumber}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
    </Modal>
  );
};

export default InDetail;
