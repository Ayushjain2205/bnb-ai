import React from "react";
import { TokenTransfersListView } from "@covalenthq/goldrush-kit";
import GoldrushTemplate from "../Functional/GoldrushTemplate";
const TokenTransfersCard = () => {
  return (
    <GoldrushTemplate>
      <TokenTransfersListView
        chain_name="bnb-opbnb-mainnet"
        address="0x211ae506cb0eeba4a816b0948aa1624e43b01b09"
        contract_address="0x9e5aac1ba1a2e6aed6b32689dfcf62a509ca96f3"
      />
    </GoldrushTemplate>
  );
};

export default TokenTransfersCard;
