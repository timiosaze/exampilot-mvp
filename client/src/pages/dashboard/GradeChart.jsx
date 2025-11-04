import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    grade: 60,
  },
  {
    name: "Feb",
    grade: 50,
  },
  {
    name: "Mar",
    grade: 75,
  },
  {
    name: "Apr",
    grade: 40,
  },
  {
    name: "May",
    grade: 100,
  },
  {
    name: "Jun",
    grade: 50,
  },
  {
    name: "Jul",
    grade: 70,
  },
  {
    name: "Aug",
    grade: 60,
  },
  {
    name: "Sep",
    grade: 60,
  },
  {
    name: "Oct",
    grade: 50,
  },
  {
    name: "Nov",
    grade: 70,
  },
  {
    name: "Dec",
    grade: 40,
  },
];

const GradeChart = () => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800">Grade Chart</h3>
          <p className="text-sm text-slate-500">Monthly overall grades</p>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="grade"
              fill="#200943"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default GradeChart;
