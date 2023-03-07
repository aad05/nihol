import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import locale from "antd/es/date-picker/locale/ru_RU";
import useNotification from "../../../../../hooks/useNotification";
import { useUpdateBookedUser } from "../../../../../hooks/useQuery/useBuildingActions";
import { switchUpdateBookingModalVisibility } from "../../../../../redux/modalSlice";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const EditBooking = () => {
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
      title="Изменить бронирование"
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
          buildingNumber: `building-${selectedBookedData?.mutationBuildingNumber}`,
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
          label="Предоплата"
          name="prePaid"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите предоплата!",
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
              { value: "building-5-1", label: "Здание 5 - 1 этаж" },
              { value: "building-5-2", label: "Здание 5 - 2 этаж" },
              { value: "building-6-1", label: "Здание 6 - 1 этаж" },
              { value: "building-6-2", label: "Здание 6 - 2 этаж" },
              { value: "building-6-3", label: "Здание 6 - 3 этаж" },
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
          <Button
            style={{ marginRight: "10px" }}
            onClick={() => dispatch(switchUpdateBookingModalVisibility())}
          >
            Отмена
          </Button>
          <Button type="primary" htmlType="submit">
            Изменить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditBooking;
