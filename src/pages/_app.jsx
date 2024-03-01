import React, { useState } from "react";
import "@/styles/globals.css";
import { ModeContext } from "../contexts/ModeContext";
import { GoldRushProvider } from "@covalenthq/goldrush-kit";
import "@covalenthq/goldrush-kit/styles.css";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  return (
    <GoldRushProvider apikey="cqt_rQDdJGg68xY6MBHtWp68v9yt4pfr">
      <ModeContext.Provider value={{ mode, setMode }}>
        <Component {...pageProps} />
      </ModeContext.Provider>
    </GoldRushProvider>
  );
}
