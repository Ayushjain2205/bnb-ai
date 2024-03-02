import React from "react";
import { GasCard } from "@covalenthq/goldrush-kit";
import GoldrushTemplate from "../Functional/GoldrushTemplate";

const Gas = () => {
  return (
    <GoldrushTemplate>
      <GasCard chain_name="eth-mainnet" event_type="erc20" />
    </GoldrushTemplate>
  );
};

export default Gas;
