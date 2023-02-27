import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  useAddUser,
  useDeleteBookedUser,
} from "../../../../../../hooks/useQuery/useBuildingActions";
import { switchBookedUserActivateModalVisibility } from "../../../../../../redux/modalSlice";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const BookingActivate = () => {
  const { mutateAsync: deleteMutate } = useDeleteBookedUser();
  const dispatch = useDispatch();
  const { mutate } = useAddUser();
  const rtl = new Intl.DateTimeFormat();
  const { selectedBookedData, selectedUserData } = useSelector(
    (state) => state.user
  );
  const { bookedUserActivateModalVisibility } = useSelector(
    (state) => state.modal
  );
  console.log(selectedBookedData);

  const addUser = (e) => {
    dispatch(
      switchBookedUserActivateModalVisibility({ loading: true, open: true })
    );

    const formattedData = {
      ...e,
      hasVoucher: false,
      birthDate: new Date(new Date(e.birthDate.$d).toDateString()).getTime(),
      arrivalDate: new Date(
        new Date(e.arrivalDate[0].$d).toDateString()
      ).getTime(),
      endDate: new Date(new Date(e.arrivalDate[1].$d).toDateString()).getTime(),
      clienteID: selectedBookedData.clienteID,
      roomNumber: selectedBookedData.roomNumber,
      roomID: selectedUserData.roomID,
    };
    (async () => {
      await deleteMutate(selectedBookedData);
      mutate(formattedData);
    })();
  };

  return (
    <Modal
      mask={true}
      title="Активировать зарегистрированного пользователя"
      open={bookedUserActivateModalVisibility.open}
      onCancel={() =>
        bookedUserActivateModalVisibility.loading
          ? false
          : dispatch(
              switchBookedUserActivateModalVisibility({
                loading: false,
                open: false,
              })
            )
      }
      footer={false}
    >
      <Form
        layout="vertical"
        initialValues={{
          buildingNumber: selectedBookedData.buildingNumber,
          roomNumber: selectedBookedData.roomNumber,
          address: selectedBookedData.address,
          phoneNumber: selectedBookedData.phoneNumber,
          fullName: selectedBookedData.fullName,
          arrivalDate: [
            dayjs(rtl.format(Number(selectedBookedData?.arrivalDate))),
            dayjs(rtl.format(Number(selectedBookedData?.endDate))),
          ],
          paidByCash: selectedBookedData.prePaid,
          paidByPlasticCard: "0",
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
          label="День рождения"
          name="birthDate"
          rules={[
            {
              required: true,
              message: "Пожалуйста, выберите дата рождения!",
            },
          ]}
        >
          <DatePicker locale={locale} />
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
          label="Стоимость за один день"
          name="dayCost"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите стоимость дней!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Оплата наличными"
          name="paidByCash"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите оплата наличными!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Оплата картой"
          name="paidByPlasticCard"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите оплата картой!",
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
              { value: "building-cottage", label: "Коттедж" },
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
          <Input disabled />
        </Form.Item>
        <Form.Item
          style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
        >
          <Button
            onClick={() =>
              dispatch(
                switchBookedUserActivateModalVisibility({
                  loading: false,
                  open: false,
                })
              )
            }
            style={{ marginRight: "10px" }}
          >
            Отмена
          </Button>
          <Button
            loading={bookedUserActivateModalVisibility.loading}
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

export default BookingActivate;
