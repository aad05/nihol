import { Button, DatePicker, Form, Input } from "antd";
import { FC } from "react";
import { Wrapper } from "./style";
import dayjs from "dayjs";
import { useUpdateSecondBuildingUser } from "../../../../../../../../hooks/useQuery/useSecondBuilding";
import useNotification from "../../../../../../../../Generic/notification";

interface EditingType {
  data: {
    fullName?: string;
    birthDate?: number;
    passportNumber?: string;
    phoneNumber?: string;
    arrivalDate?: number;
    limitDays?: string;
    treatmentDayCost?: string;
    referral?: string;
    paidByCash?: string;
    paidByPlasticCard?: string;
    buildingNumber?: string;
    roomNumber?: string;
    transfer?: string;
    _id?: string;
  };
  onCancel: () => any;
}

const Editing: FC<EditingType> = ({ data, onCancel }) => {
  const notification = useNotification();
  const { mutate } = useUpdateSecondBuildingUser();
  const rtl = new Intl.DateTimeFormat();

  const changeUserHandler = (e: {
    arrivalDate: { $d: string };
    birthDate: { $d: string };
    referral: string;
  }) => {
    const formattedData = {
      ...data,
      ...e,
      arrivalDate: new Date(e?.arrivalDate.$d).getTime(),
      birthDate: new Date(e?.birthDate.$d).getTime(),
      referral: e.referral || "",
    };

    mutate(formattedData);
    notification({
      type: "success",
      placement: "topRight",
      message: "Сохранено",
    });
  };

  return (
    <Wrapper>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{
          span: 15,
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          width: "100%",
        }}
        initialValues={{
          fullName: data?.fullName,
          birthDate: dayjs(rtl.format(Number(data?.birthDate))),
          arrivalDate: dayjs(rtl.format(Number(data?.arrivalDate))),
          passportNumber: data?.passportNumber,
          phoneNumber: data?.phoneNumber,
          limitDays: data?.limitDays,
          treatmentDayCost: data?.treatmentDayCost,
          transfer: data?.transfer,
          paidByCash: data?.paidByCash || "0",
          paidByPlasticCard: data?.paidByPlasticCard || "0",
        }}
        onFinish={(e) => changeUserHandler(e)}
      >
        <Form.Item
          label="Полное имя"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите фамилию!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="День рождения"
          name="birthDate"
          rules={[
            {
              required: true,
              message: "Пожалуйста, выберите дата рождения!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Номер паспорта"
          name="passportNumber"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите номер паспорта!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Номер телефона"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите номер телефона!",
            },
          ]}
        >
          <Input addonBefore="+998" />
        </Form.Item>
        <Form.Item
          label="Дата прибытия"
          name="arrivalDate"
          rules={[
            {
              required: true,
              message: "Пожалуйста, выберите дата прибытия!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Количество дней"
          name="limitDays"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите количество дней!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Стоимость за один день"
          name="treatmentDayCost"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите стоимость дней!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Путовка"
          name="referral"
          rules={[
            {
              required: false,
              message: "Пожалуйста, введите направления!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Перечисления"
          name="transfer"
          rules={[
            {
              required: false,
              message: "Пожалуйста, введите направления!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Оплата наличными"
          name="paidByCash"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите оплата наличными!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Оплата картой"
          name="paidByPlasticCard"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите оплата картой!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
        >
          <Button style={{ marginRight: "10px" }} onClick={onCancel}>
            Отмена
          </Button>
          <Button type="primary" htmlType="submit">
            Редактировать
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default Editing;
