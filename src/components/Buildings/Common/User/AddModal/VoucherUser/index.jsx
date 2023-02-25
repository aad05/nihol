import { Button, DatePicker, Form, Input, Select } from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddUser } from "../../../../../../hooks/useQuery/useBuildingActions";
import { switchAddUserModalVisibility } from "../../../../../../redux/modalSlice";

const { RangePicker } = DatePicker;

const VoucherUser = () => {
  const dispatch = useDispatch();
  const { mutate } = useAddUser();
  const { selectedUserData } = useSelector((state) => state.user);
  const { userAddModalVisibility } = useSelector((state) => state.modal);

  const addUser = (e) => {
    dispatch(switchAddUserModalVisibility({ loading: true, open: true }));
    const formattedData = {
      ...e,
      hasVoucher: true,
      birthDate: new Date(e.birthDate.$d).getTime(),
      arrivalDate: new Date(e.arrivalDate[0].$d).getTime(),
      endDate: new Date(e.arrivalDate[1].$d).getTime(),
      clienteID: selectedUserData.clienteID,
      roomNumber: selectedUserData.roomNumber,
      roomID: selectedUserData.roomID,
    };

    mutate(formattedData);
  };
  return (
    <Form
      layout="vertical"
      initialValues={{
        buildingNumber: `building-${selectedUserData.mutationBuildingNumber}`,
        roomNumber: selectedUserData.roomNumber,
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
      onFinish={(e) => addUser(e)}
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
        name="passportID"
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
        label="Адрес"
        name="address"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите адрес!",
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
        label="Диапазон дат"
        name="arrivalDate"
        rules={[
          {
            required: true,
            message: "Пожалуйста, выберите диапазон дат!",
          },
        ]}
      >
        <RangePicker locale={locale} />
      </Form.Item>
      <Form.Item
        label="Стоимость путевка"
        name="voucherCost"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите стоимость путевка!",
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Номер путевка"
        name="voucherNumber"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите номер путевка!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Место работы и должность"
        name="workPlace"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите место работы и должность!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Организация, выдавшая путевку"
        name="voucherOrganization"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите организация, выдавшая путевку!",
          },
        ]}
      >
        <Input />
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
            { value: "building-5-1", label: "Здание 5 - 1 этаж" },
            { value: "building-5-2", label: "Здание 5 - 2 этаж" },
            { value: "building-6-1", label: "Здание 6 - 1 этаж" },
            { value: "building-6-2", label: "Здание 6 - 2 этаж" },
            { value: "building-6-3", label: "Здание 6 - 3 этаж" },
            { value: "building-cottage", label: "Коттедж" },
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
        <Input disabled />
      </Form.Item>
      <Form.Item
        style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
      >
        <Button style={{ marginRight: "10px" }}>Отмена</Button>
        <Button
          loading={userAddModalVisibility.loading}
          type="primary"
          htmlType="submit"
        >
          Добавить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default VoucherUser;
