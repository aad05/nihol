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

const RegularUserEditing = () => {
  const notification = useNotification();
  const { mutate } = useUpdateUser();
  const dispatch = useDispatch();
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
          address: data?.address,
          dayCost: data?.dayCost,
          paidByCash: data?.paidByCash || "0",
          paidByPlasticCard: data?.paidByPlasticCard || "0",
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
          label="Sana oralig'"
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
          label="Kunlik narx"
          name="dayCost"
          rules={[
            {
              required: true,
              message: "Iltimos, kunlik narxni kriting!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Naqd to'lov"
          name="paidByCash"
          rules={[
            {
              required: true,
              message: "Iltimos, naqd to'lovni kiriting!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Karta orqali to'lov"
          name="paidByPlasticCard"
          rules={[
            {
              required: true,
              message: "Iltimos, karta orqali to'lovni kriting!",
            },
          ]}
        >
          <Input type="number" />
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
            O'zgaritirish
          </Button>
        </Wrapper.InputWrapper>
      </Form>
    </Wrapper>
  );
};

export default RegularUserEditing;
