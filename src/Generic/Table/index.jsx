import { Button, Table } from "antd";
import dayjs from "dayjs";
import { buildingDetecter, useBuildingNavigator } from "../InputAPI";

const UserTable = ({ data }) => {
  const buildingNavigator = useBuildingNavigator();
  const rtl = new Intl.DateTimeFormat();
  const columns = [
    {
      title: "Полное имя",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Номер телефона",
      render: (_, record) => (
        <a
          href={`tel:+998${record?.phoneNumber}`}
        >{`+998${record?.phoneNumber}`}</a>
      ),
      key: "phoneNumber",
    },
    {
      title: "Дата прибытия",
      key: "arrivalDate",
      render: (_, record) => rtl.format(record?.arrivalDate),
    },
    {
      title: "Дата окончания",
      key: "endDate",
      render: (_, record) => rtl.format(record?.endDate),
    },
    {
      title: "Оставшиеся дни",
      key: "raminedDays",
      render: (_, record) =>
        dayjs(Number(record?.endDate)).diff(new Date().toDateString(), "d"),
    },
    {
      title: "Всего к оплате",
      key: "total",
      render: (_, record) => (record.hasVoucher ? "С путовкой" : record.total),
    },
    {
      title: "Оплата наличными",
      key: "paidByCash",
      render: (_, record) =>
        record.hasVoucher
          ? "С путовкой"
          : record.paidByCash
          ? record.paidByCash
          : "0",
    },
    {
      title: "Оплата картой",
      key: "paidByPlasticCard",
      render: (_, record) =>
        record.hasVoucher
          ? "С путовкой"
          : record.paidByPlasticCard
          ? record.paidByPlasticCard
          : "0",
    },
    {
      title: "Здание",
      key: "buildingNumber",
      render: (_, record) => buildingDetecter(record.buildingNumber),
    },
    {
      title: "Комната",
      key: "roomNumber",
      dataIndex: "roomNumber",
    },
    {
      title: "Действия",
      key: "actions",
      render: (_, record) => (
        <Button
          onClick={() => buildingNavigator(record.buildingNumber)}
          type="primary"
        >
          Перейти
        </Button>
      ),
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      scroll={{
        x: 1500,
      }}
    />
  );
};

export default UserTable;
