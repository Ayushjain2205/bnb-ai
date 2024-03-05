import React from "react";
import { Treemap, ResponsiveContainer } from "recharts";

// Sample data for contract events visualization
const data = [
  {
    name: "BEP20",
    children: [
      { name: "Transfer", size: 2200 },
      { name: "Approval", size: 1800 },
      { name: "Mint", size: 500 },
      { name: "Burn", size: 300 },
    ],
  },
  {
    name: "ERC721",
    children: [
      { name: "Transfer", size: 2500 },
      { name: "Approval", size: 700 },
      { name: "ApprovalForAll", size: 400 },
      { name: "Mint", size: 1100 },
      { name: "Burn", size: 300 },
    ],
  },
  {
    name: "ERC1155",
    children: [
      { name: "TransferSingle", size: 1300 },
      { name: "TransferBatch", size: 900 },
      { name: "ApprovalForAll", size: 500 },
      { name: "URI", size: 700 },
    ],
  },
];

const COLORS = ["#8889DD", "#82ca9d", "#ffc658"];

// Customized content component for the treemap
const CustomizedContent = ({
  depth,
  x,
  y,
  width,
  height,
  index,
  name,
  colors,
}) => (
  <g>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      style={{
        fill: depth === 1 ? colors[index % colors.length] : "none",
        stroke: "#fff",
        strokeWidth: 2 / (depth + 1e-10),
        strokeOpacity: 1 / (depth + 1e-10),
      }}
    />
    {depth === 1 && (
      <text
        x={x + width / 2}
        y={y + height / 2 + 7}
        textAnchor="middle"
        fill="#fff"
        fontSize={14}
        style={{
          pointerEvents: "none",
        }}
      >
        {name}
      </text>
    )}
  </g>
);

// Main treemap component
const MyContracts = () => (
  <ResponsiveContainer width="100%" height={400}>
    <Treemap
      data={data}
      dataKey="size"
      aspectRatio={4 / 3}
      stroke="#fff"
      fill="#8884d8"
      content={<CustomizedContent colors={COLORS} />}
    />
  </ResponsiveContainer>
);

export default MyContracts;
