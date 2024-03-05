import React from "react";
import { TransactionReceiptView } from "@covalenthq/goldrush-kit";
import GoldrushTemplate from "../Functional/GoldrushTemplate";

const TransactionReceipt = () => {
  return (
    <GoldrushTemplate>
      <TransactionReceiptView
        chain_name="bnb-opbnb-mainnet"
        tx_hash="0x27e62c9bc92b596eab1dea2c2e8af0cd21f972da52057fb1804b0aab56097c92"
      />
    </GoldrushTemplate>
  );
};

export default TransactionReceipt;
