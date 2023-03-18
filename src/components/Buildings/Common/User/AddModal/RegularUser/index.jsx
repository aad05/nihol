import { Button, DatePicker, Form, Input, Select } from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useMenuAPI } from "../../../../../../Generic/MenuAPI";
import { useAddUser } from "../../../../../../hooks/useQuery/useBuildingActions";
import { switchAddUserModalVisibility } from "../../../../../../redux/modalSlice";

const { RangePicker } = DatePicker;

const RegularUser = () => {
  const { buildingDropDown } = useMenuAPI();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { mutate } = useAddUser();
  const { selectedUserData } = useSelector((state) => state.user);
  const { userAddModalVisibility } = useSelector((state) => state.modal);

  const addUser = (e) => {
    dispatch(switchAddUserModalVisibility({ loading: true, open: true }));

    const formattedData = {
      ...e,
      hasVoucher: false,
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
        <DatePicker locale={locale} format={"DD.MM.YYYY"} />
      </Form.Item>
      <Form.Item
        label={t("formLabels.passport_number")}
        name="passportID"
        rules={[
          {
            required: true,
            message: t("formLabels.passport_number_error"),
          },
        ]}
      >
        <Input />
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
        label={t("formLabels.phoneNumber")}
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: t("formErrors.phone_error"),
          },
        ]}
      >
        <Input addonBefore={"+998"} type="number" />
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
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label={t("formLabels.buildingNumber")}
        name="buildingNumber"
        rules={[
          {
            required: true,
            message: t("formErrors.building_error"),
          },
        ]}
      >
        <Select disabled options={buildingDropDown} />
      </Form.Item>
      <Form.Item
        label={t("formLabels.roomNumber")}
        name="roomNumber"
        rules={[
          {
            required: true,
            message: t("formErrors.room_error"),
          },
        ]}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
      >
        <Button style={{ marginRight: "10px" }}>
          {t("modal.modal_canceling")}
        </Button>
        <Button
          loading={userAddModalVisibility.loading}
          type="primary"
          htmlType="submit"
        >
          {t("modal.modal_add")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegularUser;
