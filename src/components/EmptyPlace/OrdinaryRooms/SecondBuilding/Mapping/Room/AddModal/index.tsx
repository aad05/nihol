import { Input, Modal, Form, DatePicker, Button, Select } from "antd";
import { FC, useState } from "react";
import { useAppSelector } from "../../../../../../../hooks/useRedux";
import locale from "antd/es/date-picker/locale/ru_RU";
import { useAddSecondBuildingUser } from "../../../../../../../hooks/useQuery/useSecondBuilding";

interface AddModalType {
  open: boolean;
  onCancel: () => any;
  onOk?: () => any;
  clienteData?: {};
}

const AddModal: FC<AddModalType> = ({ open, onCancel, clienteData }) => {
  console.log(clienteData);

  const { mutate } = useAddSecondBuildingUser();
  const [loading, setLoading] = useState<boolean>(false);
  const { selectedRoom } = useAppSelector((state) => state.secondBuilding);
  const onAddUser = (e: {
    arrivalDate: { $d: string };
    birthDate: { $d: string };
    phoneNumber: string;
  }) => {
    setLoading(true);
    const formattedData = {
      ...e,
      arrivalDate: new Date(e?.arrivalDate.$d).getTime(),
      birthDate: new Date(e?.birthDate.$d).getTime(),
      clienteID: selectedRoom?.clienteID,
      roomID: selectedRoom?.roomID,
      phoneNumber: `+998${e.phoneNumber}`,
    };

    mutate({
      data: formattedData,
      extraFunc: () => {
        onCancel();
        setLoading(false);
      },
    });
  };

  return (
    <Modal
      onCancel={() => (!loading ? onCancel() : false)}
      title="Добавить пользователя"
      open={open}
      footer={false}
    >
      <Form
        layout="vertical"
        initialValues={{
          buildingNumber: "building-2",
          roomNumber: selectedRoom.roomNumber,
        }}
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
        onFinish={(e) => onAddUser(e)}
      >
        <Form.Item
          label="Полное имя"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите полное имя!",
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
          <DatePicker locale={locale} />
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
          <Input addonBefore={"+998"} type="number" />
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
          <DatePicker locale={locale} />
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
          <Input type="number" />
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
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Номер расположенного здание"
          name="buildingNumber"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите номер расположенного здание!",
            },
          ]}
        >
          <Select
            disabled
            options={[
              { value: "building-2", label: "Здание 2", selected: true },
              { value: "building-3", label: "Здание 3" },
              { value: "building-4", label: "Здание 4" },
              { value: "building-5", label: "Здание 5" },
              { value: "building-6", label: "Здание 6" },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Номер расположенного комната"
          name="roomNumber"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите номер расположенного комната!",
            },
          ]}
        >
          <Input disabled type="number" />
        </Form.Item>
        <Form.Item
          style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
        >
          <Button style={{ marginRight: "10px" }} onClick={onCancel}>
            Отмена
          </Button>
          <Button loading={loading} type="primary" htmlType="submit">
            Добавить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddModal;
