import React, { useState } from "react";
import "@/styles/globals.css";
import { ModeContext } from "../contexts/ModeContext";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("light");

  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="9d7f6362bf8c29479b09b0c2a0573a24"
    >
      <ModeContext.Provider value={{ mode, setMode }}>
        <Component {...pageProps} />
      </ModeContext.Provider>
    </ThirdwebProvider>
  );
}
