import React from "react";
import { Treemap, ResponsiveContainer } from "recharts";

// Updated sample data for specific non-standard contract events visualization
const customData = [
  {
    name: "AccountFactory",
    children: [
      { name: "AccountCreated", size: 2000 },
      { name: "FactoryReset", size: 800 },
    ],
  },
  {
    name: "DEXTest",
    children: [
      { name: "TradeExecuted", size: 2500 },
      { name: "LiquidityAdded", size: 1500 },
      { name: "LiquidityRemoved", size: 1200 },
    ],
  },
  {
    name: "LoanProtocol",
    children: [
      { name: "LoanIssued", size: 1800 },
      { name: "Repayment", size: 1600 },
      { name: "CollateralSeized", size: 900 },
    ],
  },
  {
    name: "NFTMarketplace",
    children: [
      { name: "NFTListed", size: 2200 },
      { name: "NFTRemoved", size: 1300 },
      { name: "NFTSold", size: 1900 },
    ],
  },
  {
    name: "GovernanceModule",
    children: [
      { name: "ProposalCreated", size: 1100 },
      { name: "VoteCasted", size: 3100 },
      { name: "ProposalExecuted", size: 500 },
    ],
  },
  {
    name: "StakingPool",
    children: [
      { name: "StakeDeposited", size: 3000 },
      { name: "RewardDistributed", size: 2000 },
      { name: "StakeWithdrawn", size: 1800 },
    ],
  },
  {
    name: "OracleService",
    children: [
      { name: "DataRequest", size: 1600 },
      { name: "DataProvided", size: 2400 },
    ],
  },
  {
    name: "SwapAggregator",
    children: [
      { name: "SwapInitiated", size: 2700 },
      { name: "SwapCompleted", size: 1900 },
    ],
  },
];

const COLORS = [
  "#83a6ed",
  "#8dd1e1",
  "#82c91e",
  "#a9e34b",
  "#d0ed57",
  "#ffc658",
  "#ff9f40",
  "#ff5252",
];

const CustomizedContent = ({
  depth,
  x,
  y,
  width,
  height,
  name,
  colors,
  index,
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
    {(depth === 1 || depth === 2) && (
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        fill="#fff"
        fontSize={depth === 1 ? "0" : "10"}
        style={{ pointerEvents: "none" }}
      >
        {name}
      </text>
    )}
  </g>
);

const MyCustomComponent = () => (
  <ResponsiveContainer width="100%" height={400}>
    <Treemap
      data={customData}
      dataKey="size"
      aspectRatio={4 / 3}
      stroke="#fff"
      fill="#8884d8"
      content={<CustomizedContent colors={COLORS} />}
    />
  </ResponsiveContainer>
);

export default MyCustomComponent;
