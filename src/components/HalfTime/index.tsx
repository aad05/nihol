import { FC } from "react";
import { Wrapper } from "./style";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CustomTitle } from "../../Generic/CustomHelpers";

const HalfTime: FC = () => {
  interface DataType {
    key: string;
    fullName: string;
    passportID?: string;
    startDate?: string;
    endDate?: string;
    age: number;
    buildingNumber?: string;
    roomNumber?: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Полное имя",
      dataIndex: "fullName",
      key: "name",
    },
    {
      title: "Номер паспорта",
      dataIndex: "passportID",
      key: "passportID",
      render: (_, { passportID }) => (
        <>
          <Tag color={"green"}>{passportID}</Tag>
        </>
      ),
    },
    {
      title: "Номер паспорта",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Дата окончания",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Остаток",
      key: "leftOver",
      render: () => {
        const randomNum = Math.floor(Math.random() * 2) + 5;
        let color =
          randomNum <= 3
            ? "red"
            : randomNum <= 6 && randomNum > 3
            ? "yellow"
            : "green";
        return (
          <>
            <Tag color={color}>{randomNum}</Tag>
          </>
        );
      },
    },
    {
      title: "Номер здания",
      dataIndex: "buildingNumber",
      key: "buildingNumber",
      render: (_, { buildingNumber }) => (
        <>
          <Tag color={"green"}>{buildingNumber}</Tag>
        </>
      ),
    },
    {
      title: "Номер комнаты",
      dataIndex: "buildingNumber",
      key: "roomNumber",
      render: (_, { buildingNumber }) => (
        <>
          <Tag color={"green"}>{buildingNumber}</Tag>
        </>
      ),
    },
    {
      title: "Действие",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button danger>Удалить</Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      fullName: "Turg'unbayeva Gulmira",
      passportID: "AA88967h",
      startDate: "04.02.2023",
      endDate: "14.02.2023",
      age: 32,
      buildingNumber: "B2",
    },
    {
      key: "2",
      fullName: "Abdukarimova Barno",
      passportID: "AA78H6V",
      startDate: "02.02.2023",
      endDate: "12.02.2023",
      age: 42,
      buildingNumber: "A3",
    },
    {
      key: "3",
      fullName: "Omonova Shaxzoda",
      passportID: "AA67A2S3",
      startDate: "01.02.2023",
      endDate: "11.02.2023",
      age: 32,
      buildingNumber: "A1",
    },
  ];
  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>Средняя степень</CustomTitle>
      <Table columns={columns} dataSource={data} scroll={{ x: 900 }} />
    </Wrapper>
  );
};

export default HalfTime;
