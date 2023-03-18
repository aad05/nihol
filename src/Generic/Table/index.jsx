import { Button, Input, Table } from "antd";
import dayjs from "dayjs";
import { useInput } from "../InputAPI";
import { SearchOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const UserTable = ({ data }) => {
  const { t } = useTranslation();
  const { buildingDetecter, useBuildingNavigator } = useInput();
  const buildingNavigator = useBuildingNavigator();
  const rtl = new Intl.DateTimeFormat();
  const columns = [
    {
      title: t("userTable.fullname"),
      dataIndex: "fullName",
      key: "fullName",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input
            autoFocus
            placeholder={t("inputPlaceHolder.search")}
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
      title: t("userTable.phonenumber"),
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
            placeholder={t("inputPlaceHolder.search")}
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
      title: t("userTable.arrivedDate"),
      key: "arrivalDate",
      render: (_, record) => rtl.format(record?.arrivalDate),
    },
    {
      title: t("userTable.endDate"),
      key: "endDate",
      render: (_, record) => rtl.format(record?.endDate),
    },
    {
      title: t("userTable.leftDay"),
      key: "raminedDays",
      render: (_, record) =>
        dayjs(Number(record?.endDate)).diff(new Date().toDateString(), "d"),
    },
    {
      title: t("userTable.totalPay"),
      key: "total",
      render: (_, record) => (record.hasVoucher ? "С путовкой" : record.total),
    },
    {
      title: t("userTable.payByCash"),
      key: "paidByCash",
      render: (_, record) =>
        record.hasVoucher
          ? "С путовкой"
          : record.paidByCash
          ? record.paidByCash
          : "0",
    },
    {
      title: t("userTable.payByCard"),
      key: "paidByPlasticCard",
      render: (_, record) =>
        record.hasVoucher
          ? "С путовкой"
          : record.paidByPlasticCard
          ? record.paidByPlasticCard
          : "0",
    },
    {
      title: t("userTable.payDifference"),
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
      title: t("userTable.building"),
      key: "buildingNumber",
      render: (_, record) => buildingDetecter(record.buildingNumber),
    },
    {
      title: t("userTable.room"),
      key: "roomNumber",
      dataIndex: "roomNumber",
    },
    {
      title: t("userTable.action"),
      key: "actions",
      render: (_, record) => (
        <Button
          onClick={() => buildingNavigator(record.buildingNumber)}
          type="primary"
        >
          {t("userTable.go")}
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
