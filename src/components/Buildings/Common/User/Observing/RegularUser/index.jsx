import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { Wrapper } from "../../style";

import dayjs from "dayjs";
import { useInput } from "../../../../../../Generic/InputAPI";
import { useTranslation } from "react-i18next";

const RegularUser = () => {
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
          <Wrapper.Text>{data?.phoneNumber}</Wrapper.Text>
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
          <Wrapper.Label>{t("formLabels.daily_price")}:</Wrapper.Label>
          <Wrapper.Text>{data?.dayCost}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.totalPrice")}:</Wrapper.Label>
          <Wrapper.Text>{data?.total}</Wrapper.Text>
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
          <Wrapper.Label>{t("formLabels.payByCash")}:</Wrapper.Label>
          <Wrapper.Text>{data?.paidByCash || 0}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.payByCard")}:</Wrapper.Label>
          <Wrapper.Text>{data?.paidByPlasticCard || 0}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>{t("formLabels.paymentDifference")}:</Wrapper.Label>
          <Wrapper.Text>
            {data.total - (data?.paidByPlasticCard + data?.paidByCash) > 0
              ? `-${data.total - (data?.paidByPlasticCard + data?.paidByCash)}`
              : `+${Math.abs(
                  data.total - (data?.paidByPlasticCard + data?.paidByCash)
                )}` || 0}
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

export default RegularUser;
