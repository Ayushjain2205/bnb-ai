import React from "react";
import { GoldRushProvider } from "@covalenthq/goldrush-kit";
import "@covalenthq/goldrush-kit/styles.css";

const GoldrushTemplate = ({ children }) => {
  return (
    <GoldRushProvider
      apikey="cqt_rQDdJGg68xY6MBHtWp68v9yt4pfr"
      color="yellow"
      border_radius=" full"
    >
      <div>{children}</div>
    </GoldRushProvider>
  );
};

export default GoldrushTemplate;
