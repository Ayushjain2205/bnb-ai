import React from "react";
import {
  TokenBalancesListView,
  TokenTransfersListView,
  AddressActivityListView,
  NFTWalletTokenListView,
  TransactionReceiptView,
  GasCard,
} from "@covalenthq/goldrush-kit";
import GoldrushTemplate from "../Functional/GoldrushTemplate";

const TokenList = () => {
  return (
    <GoldrushTemplate>
      <TokenBalancesListView
        chain_names={["bnb-opbnb-mainnet"]}
        address="0x05ddedd07c51739d2ae21f6a9d97a8d69c2c3aaa"
      />
    </GoldrushTemplate>
  );
};

export default TokenList;
