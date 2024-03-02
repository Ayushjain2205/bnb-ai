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
      {/* <TokenBalancesListView
        chain_names={[
          "eth-mainnet",
          "matic-mainnet",
          "bsc-mainnet",
          "avalanche-mainnet",
          "optimism-mainnet",
        ]}
        hide_small_balances
        address="0xCafa93E9985793E2475bD58B9215c21Dbd421fD0"
      /> */}
      {/* <TokenTransfersListView
        chain_name="eth-mainnet"
        address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"
        contract_address="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
      /> */}
      {/* <AddressActivityListView address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de" /> */}
      {/* <NFTWalletTokenListView
        address="0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de"
        chain_names={[
          //   "eth-mainnet",
          //   "matic-mainnet",
          //   "bsc-mainnet",
          //   "avalanche-mainnet",
          //   "optimism-mainnet",
          "bnb-opbnb-mainnet",
        ]}
      /> */}
      {/* <TransactionReceiptView
        chain_name="eth-mainnet"
        tx_hash="0xc3621bc944e80a3f53dc36064ba16f97be0710ba79cdc3b39c456a6ceb596ee7"
      /> */}
      <GasCard chain_name="eth-mainnet" event_type="erc20" />
    </GoldrushTemplate>
  );
};

export default TokenList;
