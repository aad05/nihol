import { Button, DatePicker, Form, Input, Select } from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import dayjs from "dayjs";
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
      birthDate: new Date(new Date(e.birthDate.$d).toDateString()).getTime(),
      arrivalDate: new Date(
        new Date(e.arrivalDate[0].$d).toDateString()
      ).getTime(),
      endDate: new Date(new Date(e.arrivalDate[1].$d).toDateString()).getTime(),
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
        label="To'liq ism"
        name="fullName"
        rules={[
          {
            required: true,
            message: "Iltimos, to'liq ismni kiriting!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tug'ulgan sana"
        name="birthDate"
        rules={[
          {
            required: true,
            message: "Iltimos, tug'ulgan sanani kiriting!",
          },
        ]}
      >
        <DatePicker
          locale={locale}
          defaultValue={dayjs("", "DD.MM.YYYY")}
          format={"DD.MM.YYYY"}
        />
      </Form.Item>
      <Form.Item
        label="Passport raqam"
        name="passportID"
        rules={[
          {
            required: true,
            message: "Iltimos, passport raqamini kiriting!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Adres"
        name="address"
        rules={[
          {
            required: true,
            message: "Iltimos, adresni kiriting!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tel raqam"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Iltimos, tel raqamni kirting!",
          },
        ]}
      >
        <Input addonBefore={"+998"} type="number" />
      </Form.Item>
      <Form.Item
        label="Sana oralig'"
        name="arrivalDate"
        rules={[
          {
            required: true,
            message: "Iltimos, sana oralig'ini kiriting!",
          },
        ]}
      >
        <RangePicker
          defaultValue={dayjs("", "DD.MM.YYYY")}
          locale={locale}
          format={"DD.MM.YYYY"}
        />
      </Form.Item>
      <Form.Item
        label="Voucher narx"
        name="voucherCost"
        rules={[
          {
            required: true,
            message: "Iltimos, voucher narxini kiriting!",
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Voucher raqam"
        name="voucherNumber"
        rules={[
          {
            required: true,
            message: "Iltimos, voucher raqamini kiriting!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ish joyi va lavozim"
        name="workPlace"
        rules={[
          {
            required: true,
            message: "Iltimos, ish joyi va lavozimini kiriting!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Voucher bergan tashkilot"
        name="voucherOrganization"
        rules={[
          {
            required: true,
            message: "Iltimos, voucher bergan tashkilotni kiriting!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Joylashgan bino raqam"
        name="buildingNumber"
        rules={[
          {
            required: true,
            message: "Iltimos, joylashgan bino raqamini kiriting!",
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
        label="Joylashgan xona raqam"
        name="roomNumber"
        rules={[
          {
            required: true,
            message: "Iltimos, joylashgan xona raqamini kiriting!",
          },
        ]}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
      >
        <Button style={{ marginRight: "10px" }}>Bekor qilish</Button>
        <Button
          loading={userAddModalVisibility.loading}
          type="primary"
          htmlType="submit"
        >
          Qo'shish
        </Button>
      </Form.Item>
    </Form>
  );
};

export default VoucherUser;
