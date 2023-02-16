import { Input, Modal, Form, DatePicker, Button, Select } from "antd";
import { FC, useState } from "react";
import { useAppSelector } from "../../../../../../../hooks/useRedux";
import locale from "antd/es/date-picker/locale/ru_RU";
import { useAxios } from "../../../../../../../hooks/useAxios";

interface BookModalType {
  open: boolean;
  onCancel: () => any;
  onOk?: () => any;
  clienteData?: {
    arrivalDate?: number;
    remainingDays?: number;
  };
}

const BookModal: FC<BookModalType> = ({ open, onCancel, clienteData }) => {
  const axios = useAxios();
  const [loading, setLoading] = useState<boolean>(false);
  const { selectedRoom } = useAppSelector((state) => state.secondBuilding);

  const onAddUser = (e: {
    startDate: { $d: string };
    phoneNumber: string;
    prePaid: string;
  }) => {
    const formattedData = {
      ...e,
      startDate: new Date(e?.startDate.$d).getTime(),
      clienteID: selectedRoom?.clienteID,
      phoneNumber: `+998${e.phoneNumber}`,
      prePaid: e.prePaid || "",
      roomID: selectedRoom?.roomID,
    };
    console.log(formattedData);
    axios({
      method: "POST",
      url: "/accomodation/2/create-booked-user",
      body: {
        ...formattedData,
      },
    });
  };

  return (
    <Modal
      onCancel={() => (!loading ? onCancel() : false)}
      title="Забронировать место"
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
          label="Дата начала"
          name="startDate"
          rules={[
            {
              required: true,
              message: "Пожалуйста, выберите дата начала!",
            },
          ]}
        >
          <DatePicker
            locale={locale}
            disabledDate={(value: any) => {
              const antdDate = new Date(value.$d);
              if (
                antdDate.getTime() > Number(clienteData?.arrivalDate) &&
                antdDate.getTime() < Number(clienteData?.remainingDays)
              )
                return true;

              return false;
            }}
          />
        </Form.Item>
        <Form.Item
          label="Предоплата"
          name="prePaid"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
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

export default BookModal;
