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
  const { selectedBookedData, selectedUserData } = useSelector(
    (state) => state.user
  );
  const { bookedUserActivateModalVisibility } = useSelector(
    (state) => state.modal
  );

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
            dayjs(Number(selectedBookedData?.arrivalDate)),
            dayjs(Number(selectedBookedData?.endDate)),
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
            locale={locale}
            defaultValue={dayjs("", "DD.MM.YYYY")}
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
          label="Tel raqam"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Iltimos, tel raqamni kirting!",
            },
          ]}
        >
          <Input addonBefore={"+998"} type="number" />
        </Form.Item>
        <Form.Item
          label="Sana oralig'"
          name="arrivalDate"
          rules={[
            {
              required: true,
              message: "Iltimos, sana oralig'ini kiriting!",
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
              message: "Iltimos, kunlik narxni kiriting!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Naqd to'lov"
          name="paidByCash"
          rules={[
            {
              required: true,
              message: "Пожалуйста, naqd to'lovni kiriting!",
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
              message: "Пожалуйста, karta orqali to'lovni kiriting!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Joylashgan bino raqam"
          name="buildingNumber"
          rules={[
            {
              required: true,
              message: "Iltimos, joylashgan bino raqamini kiriting!",
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
          label="Joylashgan xona raqam"
          name="roomNumber"
          rules={[
            {
              required: true,
              message: "Iltimos, joylashgan xona raqamini kiriting!",
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
            Bekor qilish
          </Button>
          <Button
            loading={bookedUserActivateModalVisibility.loading}
            type="primary"
            htmlType="submit"
          >
            Qo'shish
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BookingActivate;
