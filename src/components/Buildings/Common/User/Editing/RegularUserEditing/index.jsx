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
import { useTranslation } from "react-i18next";

const { RangePicker } = DatePicker;

const RegularUserEditing = () => {
  const { t } = useTranslation();
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
          label={t("formLabels.fullname")}
          name="fullName"
          rules={[
            {
              required: true,
              message: t("formErrors.fullname_error"),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("formLabels.birthDate")}
          name="birthDate"
          rules={[
            {
              required: true,
              message: t("formErrors.birth_date_error"),
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
          label={t("formLabels.passport_number")}
          name="passportID"
          rules={[
            {
              required: true,
              message: t("formErrors.passport_number_error"),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("formLabels.phoneNumber")}
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: t("formErrors.phone_error"),
            },
          ]}
        >
          <Input addonBefore="+998" type="number" />
        </Form.Item>
        <Form.Item
          label={t("formLabels.address")}
          name="address"
          rules={[
            {
              required: true,
              message: t("formErrors.address_error"),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("formLabels.dateRange")}
          name="arrivalDate"
          rules={[
            {
              required: true,
              message: t("formErrors.datapicker_error"),
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
          label={t("formLabels.daily_price")}
          name="dayCost"
          rules={[
            {
              required: true,
              message: t("formErrors.daily_price_error"),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("formLabels.payByCash")}
          name="paidByCash"
          rules={[
            {
              required: true,
              message: t("formErrors.paid_by_cash_error"),
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label={t("formLabels.payByCard")}
          name="paidByPlasticCard"
          rules={[
            {
              required: true,
              message: t("formErrors.paid_by_card_error"),
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
            {t("modal.modal_canceling")}
          </Button>
          <Button type="primary" htmlType="submit">
            {t("modal.modal_edit")}
          </Button>
        </Wrapper.InputWrapper>
      </Form>
    </Wrapper>
  );
};

export default RegularUserEditing;
