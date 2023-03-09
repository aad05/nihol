import { Button, Input, Table } from "antd";
import dayjs from "dayjs";
import { buildingDetecter, useBuildingNavigator } from "../InputAPI";
import { SearchOutlined } from "@ant-design/icons";

const UserTable = ({ data }) => {
  const buildingNavigator = useBuildingNavigator();
  const rtl = new Intl.DateTimeFormat();
  const columns = [
    {
      title: "To'liq ism",
      dataIndex: "fullName",
      key: "fullName",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input
            autoFocus
            placeholder="Qidirish..."
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
          />
        );
      },
      filterIcon: () => <SearchOutlined />,
      onFilter: (value, record) => {
        return record.fullName.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Tel raqam",
      render: (_, record) => (
        <a
          href={`tel:+998${record?.phoneNumber}`}
        >{`+998${record?.phoneNumber}`}</a>
      ),
      key: "phoneNumber",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input
            autoFocus
            addonBefore="+998"
            placeholder="Qidirish..."
            value={selectedKeys[1]}
            type="number"
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => confirm()}
            onBlur={() => confirm()}
          />
        );
      },
      filterIcon: () => <SearchOutlined />,
      onFilter: (value, record) => {
        return record.phoneNumber.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Kelgan sana",
      key: "arrivalDate",
      render: (_, record) => rtl.format(record?.arrivalDate),
    },
    {
      title: "Tugash sana",
      key: "endDate",
      render: (_, record) => rtl.format(record?.endDate),
    },
    {
      title: "Qolgan kun",
      key: "raminedDays",
      render: (_, record) =>
        dayjs(Number(record?.endDate)).diff(new Date().toDateString(), "d"),
    },
    {
      title: "Jami to'lov",
      key: "total",
      render: (_, record) => (record.hasVoucher ? "С путовкой" : record.total),
    },
    {
      title: "Naqd to'lov",
      key: "paidByCash",
      render: (_, record) =>
        record.hasVoucher
          ? "С путовкой"
          : record.paidByCash
          ? record.paidByCash
          : "0",
    },
    {
      title: "Karta orqali to'lov",
      key: "paidByPlasticCard",
      render: (_, record) =>
        record.hasVoucher
          ? "С путовкой"
          : record.paidByPlasticCard
          ? record.paidByPlasticCard
          : "0",
    },
    {
      title: "To'lov farqi",
      key: "paymentDifference",
      render: (_, record) =>
        record.total - (record?.paidByPlasticCard + record?.paidByCash) > 0
          ? `-${
              record.total - (record?.paidByPlasticCard + record?.paidByCash)
            }`
          : `+${Math.abs(
              record.total - (record?.paidByPlasticCard + record?.paidByCash)
            )}` || 0,
    },
    {
      title: "Bino",
      key: "buildingNumber",
      render: (_, record) => buildingDetecter(record.buildingNumber),
    },
    {
      title: "Xona",
      key: "roomNumber",
      dataIndex: "roomNumber",
    },
    {
      title: "Xarakat",
      key: "actions",
      render: (_, record) => (
        <Button
          onClick={() => buildingNavigator(record.buildingNumber)}
          type="primary"
        >
          O'tish
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
