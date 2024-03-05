import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

// Utility function to generate dates
const generateLastNDays = (n) => {
  return Array.from({ length: n })
    .map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return {
        date: `${d.getMonth() + 1}/${d.getDate()}`,
        Transactions: Math.floor(Math.random() * 2000) + 500, // Generate random transaction counts
      };
    })
    .reverse(); // Reverse to get dates in ascending order
};

const TransactionsChart = () => {
  const data = generateLastNDays(20);

  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis
            label={{
              value: "Transactions",
              angle: -90,
              position: "insideLeft",
              style: {
                fontSize: "18px", // Increase font size here
                textAnchor: "middle",
              },
              dx: -15, // Adjust gap from Y-axis by shifting label to the left
            }}
          />
          <Tooltip />

          <Bar
            dataKey="Transactions"
            fill="#F3BA2FF0"
            activeBar={<Rectangle fill="#35363B" stroke="black" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionsChart;
