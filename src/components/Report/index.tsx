import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const Report = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const firstData = [
    {
      name: "Картой",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Наличные",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];
  const secondData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  return (
    <Wrapper>
      <Title>Отчет</Title>
      <Wrapper.ChartWrapper>
        <Wrapper.Title>Оплаченный суммы</Wrapper.Title>
        <BarChart
          width={500}
          height={300}
          data={firstData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </Wrapper.ChartWrapper>
      <Wrapper.ChartWrapper>
        <Wrapper.Title>Оживленные здания</Wrapper.Title>
        <PieChart width={400} height={200}>
          <Pie
            data={secondData}
            cx="50%"
            cy="50%"
            // labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {secondData.map((entry, index) => (
              <Cell key={`name`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </Wrapper.ChartWrapper>
    </Wrapper>
  );
};

export default Report;
