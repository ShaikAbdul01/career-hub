import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "Assignment 1",
    uv: 60,
    pv: 60,
    amt: 60,
  },
  {
    name: "Assignment 2",
    uv: 59,
    pv: 60,
    amt: 60,
  },
  {
    name: "Assignment 3",
    uv: 60,
    pv: 60,
    amt: 60,
  },
  {
    name: "Assignment 4",
    uv: 56,
    pv: 60,
    amt: 60,
  },
  {
    name: "Assignment 5",
    uv: 27,
    pv: 30,
    amt: 60,
  },
  {
    name: "Assignment 6",
    uv: 25,
    pv: 30,
    amt: 60,
  },
  {
    name: "Assignment 7",
    uv: 60,
    pv: 60,
    amt: 60,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {

  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function Statistics() {

  return (
    <BarChart
      className="mt-48 mx-auto mb-10"
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar
        dataKey="uv"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}

Statistics.demoUrl =
  "https://codesandbox.io/s/bar-chart-with-customized-shape-dusth";
