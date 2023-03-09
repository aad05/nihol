import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { Wrapper } from "../../style";
import { buildingDetecter } from "../../../../../../Generic/InputAPI";
import dayjs from "dayjs";

const RegularUser = () => {
  const queryClient = useQueryClient();
  const rtl = new Intl.DateTimeFormat();
  const { selectedUserData } = useSelector((state) => state.user);
  const data = queryClient.getQueryData(`user/${selectedUserData?.userID}`);

  return (
    <Wrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>To'liq ism:</Wrapper.Label>
          <Wrapper.Text>{data?.fullName}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Tug'ulgan sana:</Wrapper.Label>
          <Wrapper.Text>{rtl.format(data?.birthDate)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Passport raqam:</Wrapper.Label>
          <Wrapper.Text>{data?.passportID}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Tel raqam:</Wrapper.Label>
          <Wrapper.Text>{data?.phoneNumber}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Adres:</Wrapper.Label>
          <Wrapper.Text>{data?.address}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Kelgan sana:</Wrapper.Label>
          <Wrapper.Text>{rtl.format(data?.arrivalDate)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Tugash sana:</Wrapper.Label>
          <Wrapper.Text>{rtl.format(data?.endDate)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Qolgan kun:</Wrapper.Label>
          <Wrapper.Text>
            {dayjs(Number(data?.endDate)).diff(new Date().toDateString(), "d")}
          </Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Kunlik narx:</Wrapper.Label>
          <Wrapper.Text>{data?.dayCost}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Jami to'lov:</Wrapper.Label>
          <Wrapper.Text>{data?.total}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Vaucher holati:</Wrapper.Label>
          <Wrapper.Text>
            {data?.hasVoucher ? "Voucher bilan" : "Voucher siz"}
          </Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Naqd to'lov:</Wrapper.Label>
          <Wrapper.Text>{data?.paidByCash || 0}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Karta orqali to'lov:</Wrapper.Label>
          <Wrapper.Text>{data?.paidByPlasticCard || 0}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>To'lov farqi:</Wrapper.Label>
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
          <Wrapper.Label>Joylashgan bino raqamu:</Wrapper.Label>
          <Wrapper.Text>{buildingDetecter(data?.buildingNumber)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Joyalashgan xona raqami:</Wrapper.Label>
          <Wrapper.Text>{data?.roomNumber}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
    </Wrapper>
  );
};

export default RegularUser;
