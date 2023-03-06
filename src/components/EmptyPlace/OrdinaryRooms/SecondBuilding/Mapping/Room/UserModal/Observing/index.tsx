import { Button, Modal } from "antd";
import dayjs from "dayjs";
import { FC } from "react";
import { useRemoveSecondBuildingUser } from "../../../../../../../../hooks/useQuery/useSecondBuilding";
import { Wrapper } from "./style";

const { confirm } = Modal;

interface ObservingType {
  data: {
    fullName?: string;
    birthDate?: number;
    passportNumber?: string;
    arrivalDate?: number;
    limitDays?: string;
    treatmentDayCost?: string;
    referral?: string;
    paidByCash?: string;
    paidByPlasticCard?: string;
    buildingNumber?: string;
    roomNumber?: string;
    remainingDays?: number;
    phoneNumber?: string;
    _id?: string;
    clienteID?: string;
  };
  onCancel: () => any;
}
const Observing: FC<ObservingType> = ({ data, onCancel }) => {
  const { mutate: deleteMutate } = useRemoveSecondBuildingUser();
  const rtl = new Intl.DateTimeFormat();
  const deletHandler = () => {
    return confirm({
      title: "Убеждаться!",
      content: "Это действие нельзя отменить после подтверждения удаления.",
      cancelText: "Отмена",
      okText: "Удалить",
      onOk: () => {
        deleteMutate({
          _id: data._id,
          clienteID: data.clienteID,
          roomNumber: data.roomNumber,
        });
        onCancel();
      },
    });
  };

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
          <Wrapper.Text>{data?.passportNumber}</Wrapper.Text>
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
          <Wrapper.Label>Дата прибытия:</Wrapper.Label>
          <Wrapper.Text>{rtl.format(data?.arrivalDate)}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Количество дней:</Wrapper.Label>
          <Wrapper.Text>{data?.limitDays}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Оставшиеся дни:</Wrapper.Label>
          <Wrapper.Text>
            {dayjs(data?.remainingDays).diff(new Date(), "d")}
          </Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Стоимость за один день:</Wrapper.Label>
          <Wrapper.Text>{data?.treatmentDayCost}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Всего к оплате:</Wrapper.Label>
          <Wrapper.Text>
            {Number(data?.treatmentDayCost) * Number(data?.limitDays)}
          </Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Направления:</Wrapper.Label>
          <Wrapper.Text>{data?.referral}</Wrapper.Text>
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
          <Wrapper.Text>2</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.InputContainer>
          <Wrapper.Label>Номер расположенного комната:</Wrapper.Label>
          <Wrapper.Text>{data?.roomNumber}</Wrapper.Text>
        </Wrapper.InputContainer>
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper
        style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
      >
        <Button
          danger
          type="primary"
          style={{ marginLeft: "auto" }}
          onClick={() => deletHandler()}
        >
          Удалить
        </Button>
      </Wrapper.InputWrapper>
    </Wrapper>
  );
};

export default Observing;
