import React, { useContext } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { ModeContext } from "../../contexts/ModeContext";

const Navbar = () => {
  const { mode } = useContext(ModeContext);
  return (
    <nav className="flex justify-between items-center h-[56px]">
      <div className="flex-1">
        <span className="text-[32px] font-bold text-primary">opBNB.ai</span>
      </div>
      <div className="flex flex-row gap-[24px]">
        <ConnectWallet
          style={{
            backgroundColor: mode === "light" ? "#F3BA2F" : "#35363B",
            borderRadius: "0px",
            height: "48px",
            width: "192px",
            border: "none",
            color: "white",
            fontWeight: "bold",
          }}
        />
        <div className="flex flex-row items-center justify-center rounded-[100px] bg-primary h-[48px] w-[48px]">
          <img src="/icons/dude.svg" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
