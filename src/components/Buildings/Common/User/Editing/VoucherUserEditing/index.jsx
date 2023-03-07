import { Button, DatePicker, Form, Input } from "antd";
import React from "react";
import { Wrapper } from "../../style";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "react-query";
import { useUpdateUser } from "../../../../../../hooks/useQuery/useBuildingActions";
import useNotification from "../../../../../../hooks/useNotification";
import { switchUserModalVisibility } from "../../../../../../redux/modalSlice";

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
          label="Номер телефона"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите номер телефона!",
            },
          ]}
        >
          <Input addonBefore="+998" type="number" />
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
          label="Дата прибытия"
          name="arrivalDate"
          rules={[
            {
              required: true,
              message: "Пожалуйста, выберите дата прибытия!",
            },
          ]}
        >
          <RangePicker />
        </Form.Item>
        <Form.Item
          label="Стоимость путовки"
          name="voucherCost"
          rules={[
            {
              required: true,
              message: "Пожалуйста, выберите cтоимость путовки!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Номер путевки"
          name="voucherNumber"
          rules={[
            {
              required: true,
              message: "Пожалуйста, выберите номер путовки!",
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
              message: "Пожалуйста, выберите место работы и должность!",
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
              message: "Пожалуйста, выберите организация, выдавшая путевку!",
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
            Отмена
          </Button>
          <Button type="primary" htmlType="submit">
            Редактировать
          </Button>
        </Wrapper.InputWrapper>
      </Form>
    </Wrapper>
  );
};

export default VoucherUserEditing;
