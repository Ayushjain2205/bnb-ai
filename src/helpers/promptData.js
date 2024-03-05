export const promptCategories = [
  {
    title: "Transcations",
    mode: "normal",
    items: [
      {
        prompt_title: "Breakdown transcation",
        prompt_text:
          "I want you to break down a transcation with hash - 0x27e62c9bc92b596eab1dea2c2e8af0cd21f972da52057fb1804b0aab56097c92",
      },
      {
        prompt_title: "Transfer history ",
        prompt_text:
          "I want to see a detailed transfer history for the account - 0x211ae506cb0eeba4a816b0948aa1624e43b01b09 ",
      },
      {
        prompt_title: "Token detials ",
        prompt_text:
          "I want to see the tokens held by the account - 0x05ddedd07c51739d2ae21f6a9d97a8d69c2c3aaa ",
      },
    ],
  },
  {
    title: "Smart Contract",
    mode: "dev",
    items: [
      {
        prompt_title: "Transaction analysis",
        prompt_text:
          "I want to get a visualisation of number of transcations for the contract 0xa9ad1484d9bfb27adbc2bf50a6e495777cc8cff2",
      },
      {
        prompt_title: "Event Breakdown",
        prompt_text:
          "Give me a break down of all the events that were called in this smart contract.",
      },
      {
        prompt_title: "Deployed Contracts",
        prompt_text: "Show me my deployed contracts characterised by",
      },
    ],
  },
  {
    title: "Know about your wallet",
    mode: "normal",
    items: [
      {
        prompt_title: "Wallet Health",
        prompt_text: "Check wallet health of my account",
      },
      {
        prompt_title: "Transaction Analysis",
        prompt_text: "Analyze wallet transactions",
      },
      { prompt_title: "Security Tips", prompt_text: "Wallet security tips" },
    ],
  },
];
