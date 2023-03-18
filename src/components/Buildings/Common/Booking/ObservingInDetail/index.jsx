import { Modal } from "antd";
import { Wrapper } from "../style";
import { useDispatch, useSelector } from "react-redux";
import { switchBookedUserDetailedModalVisibility } from "../../../../../redux/modalSlice";
import { useInput } from "../../../../../Generic/InputAPI";
import { useTranslation } from "react-i18next";

const InDetail = () => {
  const { t } = useTranslation();
  const { buildingDetecter } = useInput();
  const dispatch = useDispatch();
  const rtl = new Intl.DateTimeFormat();
  const { selectedBookedData } = useSelector((state) => state.user);
  const { bookedUserDetailedModalVisibility } = useSelector(
    (state) => state.modal
  );

  return (
    <Modal
      open={bookedUserDetailedModalVisibility}
      title={t("commonBooking.detailModal.title")}
      onCancel={() => dispatch(switchBookedUserDetailedModalVisibility())}
      footer={false}
    >
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.fullname")}:</Wrapper.Label>
          <Wrapper.Text>{selectedBookedData?.fullName}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.phoneNumber")}:</Wrapper.Label>
          <Wrapper.Text>+998{selectedBookedData?.phoneNumber}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.address")}:</Wrapper.Label>
          <Wrapper.Text>{selectedBookedData?.address}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.cameDate")}</Wrapper.Label>
          <Wrapper.Text>
            {rtl.format(selectedBookedData?.arrivalDate)}
          </Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.endDate")}:</Wrapper.Label>
          <Wrapper.Text>{rtl.format(selectedBookedData?.endDate)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.prepaid")}:</Wrapper.Label>
          <Wrapper.Text>{selectedBookedData?.prePaid}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.buildingNumber")}:</Wrapper.Label>
          <Wrapper.Text>
            {buildingDetecter(selectedBookedData?.buildingNumber)}
          </Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.roomNumber")}:</Wrapper.Label>
          <Wrapper.Text>{selectedBookedData?.roomNumber}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
    </Modal>
  );
};

export default InDetail;
