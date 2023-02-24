import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import locale from "antd/es/date-picker/locale/ru_RU";
import { useAddBookedUser } from "../../../../../hooks/useQuery/useBuildingActions";
import { switchAddBookingModalVisibility } from "../../../../../redux/modalSlice";

const { RangePicker } = DatePicker;

const AddBooking = () => {
  const { mutate } = useAddBookedUser();
  const dispatch = useDispatch();
  const { bookingAddModalVisibility } = useSelector((state) => state.modal);
  const { selectedUserData } = useSelector((state) => state.user);

  const addBookingUser = (e) => {
    const formattedData = {
      ...e,
      arrivalDate: new Date(e.arrivalDate[0].$d).getTime(),
      endDate: new Date(e.arrivalDate[1].$d).getTime(),
      clienteID: selectedUserData.clienteID,
      roomNumber: selectedUserData.roomNumber,
      roomID: selectedUserData.roomID,
    };
    mutate(formattedData);
  };

  return (
    <Modal
      title="Добавить брон"
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
              { value: "building-5", label: "Здание 5" },
              { value: "building-6", label: "Здание 6" },
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
            disabled={bookingAddModalVisibility.loading}
            onClick={() =>
              dispatch(
                switchAddBookingModalVisibility({ loading: false, open: false })
              )
            }
          >
            Отмена
          </Button>
          <Button
            loading={bookingAddModalVisibility.loading}
            type="primary"
            htmlType="submit"
          >
            Добавить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddBooking;
