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
          <Wrapper.Label>Полное имя:</Wrapper.Label>
          <Wrapper.Text>{data?.fullName}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>День рождения:</Wrapper.Label>
          <Wrapper.Text>{rtl.format(data?.birthDate)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Номер паспорта:</Wrapper.Label>
          <Wrapper.Text>{data?.passportID}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Номер телефона:</Wrapper.Label>
          <Wrapper.Text>{data?.phoneNumber}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Адрес:</Wrapper.Label>
          <Wrapper.Text>{data?.address}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Дата прибытия:</Wrapper.Label>
          <Wrapper.Text>{rtl.format(data?.arrivalDate)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Дата окончания:</Wrapper.Label>
          <Wrapper.Text>{rtl.format(data?.endDate)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Оставшиеся дни:</Wrapper.Label>
          <Wrapper.Text>
            {dayjs(Number(data?.endDate)).diff(new Date(), "d")}
          </Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Стоимость за один день:</Wrapper.Label>
          <Wrapper.Text>{data?.dayCost}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Всего к оплате:</Wrapper.Label>
          <Wrapper.Text>{data?.total}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Статус путовки:</Wrapper.Label>
          <Wrapper.Text>
            {data?.hasVoucher ? "C путовки" : "Нет путовки"}
          </Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Оплата наличными:</Wrapper.Label>
          <Wrapper.Text>{data?.paidByCash || 0}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Оплата картой:</Wrapper.Label>
          <Wrapper.Text>{data?.paidByPlasticCard || 0}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Номер расположенного здание:</Wrapper.Label>
          <Wrapper.Text>{buildingDetecter(data?.buildingNumber)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Номер расположенного комната:</Wrapper.Label>
          <Wrapper.Text>{data?.roomNumber}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
    </Wrapper>
  );
};

export default RegularUser;
