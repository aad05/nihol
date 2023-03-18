import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import locale from "antd/es/date-picker/locale/ru_RU";
import useNotification from "../../../../../hooks/useNotification";
import { useUpdateBookedUser } from "../../../../../hooks/useQuery/useBuildingActions";
import { switchUpdateBookingModalVisibility } from "../../../../../redux/modalSlice";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useMenuAPI } from "../../../../../Generic/MenuAPI";

const { RangePicker } = DatePicker;

const EditBooking = () => {
  const { buildingDropDown } = useMenuAPI();
  const { t } = useTranslation();
  const notificatio = useNotification();
  const { mutate } = useUpdateBookedUser();
  const dispatch = useDispatch();
  const { selectedBookedData } = useSelector((state) => state.user);
  const { bookedUserUpdateModalVisibility } = useSelector(
    (state) => state.modal
  );
  const updateBookedUser = (e) => {
    const formattedData = {
      ...selectedBookedData,
      ...e,
      arrivalDate: new Date(e.arrivalDate[0].$d).getTime(),
      endDate: new Date(e.arrivalDate[1].$d).getTime(),
    };
    mutate(formattedData);
    notificatio({ type: "success", message: "Сохранено" });
    dispatch(switchUpdateBookingModalVisibility());
  };

  return (
    <Modal
      title={t("commonBooking.editModal.title")}
      open={bookedUserUpdateModalVisibility}
      onCancel={() => dispatch(switchUpdateBookingModalVisibility())}
      footer={false}
    >
      {" "}
      <Form
        layout="vertical"
        initialValues={{
          fullName: selectedBookedData.fullName,
          address: selectedBookedData.address,
          phoneNumber: selectedBookedData.phoneNumber,
          arrivalDate: [
            dayjs(Number(selectedBookedData?.arrivalDate)),
            dayjs(Number(selectedBookedData?.endDate)),
          ],
          prePaid: selectedBookedData.prePaid,
          buildingNumber: `${selectedBookedData?.buildingNumber}`,
          roomNumber: selectedBookedData.roomNumber,
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
        onFinish={(e) => updateBookedUser(e)}
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
            locale={locale}
            defaultValue={dayjs("", "DD.MM.YYYY")}
            format={"DD.MM.YYYY"}
          />
        </Form.Item>
        <Form.Item
          label={t("formLabels.prepaid")}
          name="prePaid"
          rules={[
            {
              required: true,
              message: t("formErrors.prepaid_error"),
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
          <Input disabled type="number" />
        </Form.Item>
        <Form.Item
          style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
        >
          <Button
            style={{ marginRight: "10px" }}
            onClick={() => dispatch(switchUpdateBookingModalVisibility())}
          >
            {t("modal.modal_canceling")}
          </Button>
          <Button type="primary" htmlType="submit">
            {t("modal.modal_edit")}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditBooking;
