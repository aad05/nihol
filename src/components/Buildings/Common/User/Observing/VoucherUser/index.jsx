import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { Wrapper } from "../../style";
import dayjs from "dayjs";
import { useInput } from "../../../../../../Generic/InputAPI";
import { useTranslation } from "react-i18next";

const VoucherUser = () => {
  const { t } = useTranslation();
  const { buildingDetecter } = useInput();
  const queryClient = useQueryClient();
  const rtl = new Intl.DateTimeFormat();
  const { selectedUserData } = useSelector((state) => state.user);
  const data = queryClient.getQueryData(`user/${selectedUserData?.userID}`);

  return (
    <Wrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.fullname")}:</Wrapper.Label>
          <Wrapper.Text>{data?.fullName}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.birthDate")}:</Wrapper.Label>
          <Wrapper.Text>{rtl.format(data?.birthDate)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.passport_number")}:</Wrapper.Label>
          <Wrapper.Text>{data?.passportID}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.phoneNumber")}:</Wrapper.Label>
          <Wrapper.Text>+998{data?.phoneNumber}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.address")}:</Wrapper.Label>
          <Wrapper.Text>{data?.address}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.cameDate")}:</Wrapper.Label>
          <Wrapper.Text>{rtl.format(data?.arrivalDate)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.endDate")}:</Wrapper.Label>
          <Wrapper.Text>{rtl.format(data?.endDate)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.remainingDays")}:</Wrapper.Label>
          <Wrapper.Text>
            {dayjs(Number(data?.endDate)).diff(new Date().toDateString(), "d")}
          </Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.voucherCost")}:</Wrapper.Label>
          <Wrapper.Text>{data?.voucherCost}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.voucherNumber")}:</Wrapper.Label>
          <Wrapper.Text>{data?.voucherNumber}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.workPlace")}:</Wrapper.Label>
          <Wrapper.Text>{data?.workPlace}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.workOrganization")}:</Wrapper.Label>
          <Wrapper.Text>{data?.voucherOrganization}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.statusVoucher")}:</Wrapper.Label>
          <Wrapper.Text>
            {data?.hasVoucher
              ? t("formLabels.statusVoucherYup")
              : t("formLabels.statusVoucherNah")}
          </Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.buildingNumber")}:</Wrapper.Label>
          <Wrapper.Text>{buildingDetecter(data?.buildingNumber)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.roomNumber")}:</Wrapper.Label>
          <Wrapper.Text>{data?.roomNumber}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
    </Wrapper>
  );
};

export default VoucherUser;
