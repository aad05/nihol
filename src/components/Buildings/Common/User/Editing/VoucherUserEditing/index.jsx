import { Button, DatePicker, Form, Input } from "antd";
import React from "react";
import { Wrapper } from "../../style";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "react-query";
import { useUpdateUser } from "../../../../../../hooks/useQuery/useBuildingActions";
import useNotification from "../../../../../../hooks/useNotification";
import { switchUserModalVisibility } from "../../../../../../redux/modalSlice";
import locale from "antd/es/date-picker/locale/ru_RU";

const { RangePicker } = DatePicker;

const VoucherUserEditing = () => {
  const dispatch = useDispatch();
  const notification = useNotification();
  const { mutate } = useUpdateUser();
  const queryClient = useQueryClient();
  const rtl = new Intl.DateTimeFormat();
  const { selectedUserData } = useSelector((state) => state.user);
  const data = queryClient.getQueryData(`user/${selectedUserData?.userID}`);

  const changeUserHandler = (e) => {
    const formattedData = {
      ...data,
      ...e,
      birthDate: new Date(e?.birthDate.$d).getTime(),
      arrivalDate: new Date(e?.arrivalDate[0].$d).getTime(),
      endDate: new Date(e?.arrivalDate[1].$d).getTime(),
    };
    mutate(formattedData);
    notification({ type: "success", message: "Сохранено" });
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
          arrivalDate: [
            dayjs(Number(data?.arrivalDate)),
            dayjs(Number(data?.endDate)),
          ],
          passportID: data?.passportID,
          phoneNumber: data?.phoneNumber,
          voucherCost: data?.voucherCost,
          workPlace: data?.workPlace,
          address: data?.address,
          voucherNumber: data?.voucherNumber,
          voucherOrganization: data?.voucherOrganization,
        }}
        onFinish={(e) => changeUserHandler(e)}
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
            defaultValue={dayjs("", "DD.MM.YYYY")}
            locale={locale}
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
          label="Tel raqam"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Iltimos, tel raqamni kirting!",
            },
          ]}
        >
          <Input addonBefore="+998" type="number" />
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
          label="Kelish sanasi"
          name="arrivalDate"
          rules={[
            {
              required: true,
              message: "Iltimos, kelish sanasini kiriting!",
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
        <Wrapper.InputWrapper
          style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
        >
          <Button
            style={{ marginRight: "10px" }}
            onClick={() => dispatch(switchUserModalVisibility())}
          >
            Bekor qilish
          </Button>
          <Button type="primary" htmlType="submit">
            O'zgartirish
          </Button>
        </Wrapper.InputWrapper>
      </Form>
    </Wrapper>
  );
};

export default VoucherUserEditing;
