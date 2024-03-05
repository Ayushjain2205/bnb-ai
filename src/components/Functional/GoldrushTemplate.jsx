import React, { useContext } from "react";
import { GoldRushProvider } from "@covalenthq/goldrush-kit";
import "@covalenthq/goldrush-kit/styles.css";
import { ModeContext } from "../../contexts/ModeContext";

const GoldrushTemplate = ({ children }) => {
  const { mode } = useContext(ModeContext);
  return (
    <GoldRushProvider
      apikey="cqt_rQDdJGg68xY6MBHtWp68v9yt4pfr"
      color={mode === "light" ? "yellow" : "slate"}
      border_radius=" full"
    >
      <div className="flex">{children}</div>
    </GoldRushProvider>
  );
};

export default GoldrushTemplate;
