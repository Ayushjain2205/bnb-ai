import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Utility function to generate dates and random data
const generateData = (days, functions) => {
  let data = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    let dataPoint = {
      date: `${date.getMonth() + 1}/${date.getDate()}`,
    };
    functions.forEach((func) => {
      // Generating random data for each function call
      dataPoint[func] = Math.floor(Math.random() * 100) + 10;
    });
    data.push(dataPoint);
  }
  return data;
};

const EventCharts = () => {
  const data = generateData(10, ["mint", "burn", "transfer"]);

  return (
    <div style={{ width: "100%", height: 400 }}>
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
              value: "Event Breakdown",
              angle: -90,
              position: "insideLeft",
              style: {
                fontSize: "18px",

                color: "#666666",
              },
            }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="mint" stackId="a" fill="#8884d8" />
          <Bar dataKey="burn" stackId="a" fill="#82ca9d" />
          <Bar dataKey="transfer" stackId="a" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EventCharts;
