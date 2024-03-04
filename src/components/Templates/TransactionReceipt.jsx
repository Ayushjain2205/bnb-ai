import React from "react";
import { TransactionReceiptView } from "@covalenthq/goldrush-kit";
import GoldrushTemplate from "../Functional/GoldrushTemplate";

const TransactionReceipt = () => {
  return (
    <GoldrushTemplate>
      <TransactionReceiptView
        chain_name="bnb-opbnb-mainnet"
        tx_hash="0x858339e945549ec77e2d7252dc0f67697edfcec59950c93f604066e5ef6a4594"
      />
    </GoldrushTemplate>
  );
};

export default TransactionReceipt;
