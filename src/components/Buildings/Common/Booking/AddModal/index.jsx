import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import locale from "antd/es/date-picker/locale/ru_RU";
import { useAddBookedUser } from "../../../../../hooks/useQuery/useBuildingActions";
import { switchAddBookingModalVisibility } from "../../../../../redux/modalSlice";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useMenuAPI } from "../../../../../Generic/MenuAPI";

const { RangePicker } = DatePicker;

const AddBooking = () => {
  const { buildingDropDown } = useMenuAPI();
  const { t } = useTranslation();
  const { mutate } = useAddBookedUser();
  const dispatch = useDispatch();
  const { bookingAddModalVisibility } = useSelector((state) => state.modal);
  const { selectedUserData } = useSelector((state) => state.user);

  const addBookingUser = (e) => {
    const formattedData = {
      ...e,
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
    <Modal
      title={t("commonBooking.addModal.title")}
      open={bookingAddModalVisibility.open}
      onCancel={() => {
        if (!bookingAddModalVisibility.isLoading) {
          dispatch(
            switchAddBookingModalVisibility({ loading: false, open: false })
          );
        }
      }}
      footer={false}
    >
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
        onFinish={(e) => addBookingUser(e)}
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
            defaultValue={dayjs("", "DD.MM.YYYY")}
            locale={locale}
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
          <Input disabled />
        </Form.Item>
        <Form.Item
          style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
        >
          <Button
            style={{ marginRight: "10px" }}
            disabled={bookingAddModalVisibility.loading}
            onClick={() =>
              dispatch(
                switchAddBookingModalVisibility({ loading: false, open: false })
              )
            }
          >
            {t("modal.modal_canceling")}
          </Button>
          <Button
            loading={bookingAddModalVisibility.loading}
            type="primary"
            htmlType="submit"
          >
            {t("modal.modal_add")}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddBooking;
