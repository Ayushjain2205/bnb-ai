import React, { useContext } from "react";
import Switch from "../Functional/Switch";
import { ModeContext } from "../../contexts/ModeContext";
import { promptCategories } from "../../helpers/promptData";

const SideBar = ({ onClearMessages, onPropmtClick }) => {
  const { mode } = useContext(ModeContext);
  const currentCategories = promptCategories.filter((category) =>
    mode === "dev" ? category.mode === "dev" : category.mode === "normal"
  );
  return (
    <div className="flex flex-col min-w-[294px] max-w-[294px]: pr-[24px] h-full overflow-y-scroll border-r-[3px] border-[#E7E9EB]">
      <div className="flex-1 overflow-y-scroll">
        <details className="collapse w-[270px] px-0" open>
          <summary className="collapse-title text-xl font-bold px-0">
            <div className="flex flex-row justify-between">
              <span className="text-primary text-[24px]">Chat history</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </summary>
          <div className="collapse-content px-0">
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row items-center h-[48px] border-b-[2px] border-[#E7E9EB]">
                <span className="text-[16px] text-[#7A7A7A]">
                  Show me the performance of bnb
                </span>
              </div>
              <div className="flex flex-row items-center h-[48px] border-b-[2px] border-[#E7E9EB]">
                <span className="text-[16px] text-[#7A7A7A]">
                  What is the right time to bridge
                </span>
              </div>
              <div className="flex flex-row items-center h-[48px] border-b-[2px] border-[#E7E9EB]">
                <span className="text-[16px] text-[#7A7A7A]">
                  Check wallet health of ..
                </span>
              </div>
            </div>
          </div>
        </details>
        <div className="text-[24px] text-primary font-bold mt-[48px]">
          Explore
        </div>

        {currentCategories.map((category, categoryIndex) => (
          <details
            key={categoryIndex}
            className="collapse w-[270px] mt-[12px] px-0 border-b-2 border-[#E7E9EB] rounded-none"
          >
            <summary className="collapse-title pt-[12px] items-center text-xl font-bold min-h-[48px] px-0 py-0">
              <div className="flex flex-row justify-between">
                <span className="text-secondary text-[16px]">
                  {category.title}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#7A7A7A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </summary>
            <div className="collapse-content px-0">
              <div className="flex flex-col gap-[4px]">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-row items-center h-[36px] cursor-pointer"
                    onClick={() => onPropmtClick(item.prompt_text)}
                  >
                    <span className="text-[14px] text-[#7A7A7A] font-medium">
                      {item.prompt_title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
      <div className="flex-none">
        <div className="flex flex-col gap-[24px]">
          <button
            className="btn btn-primary rounded-none bg-primary h-[48px] w-[270px] font-bold text-white"
            onClick={onClearMessages}
          >
            <img src="/icons/plus-circle.svg" alt="" />
            New Chat
          </button>
          <div className="flex flex-row justify-between items-center">
            <span className="text-[20px] font-bold">DEV MODE</span>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
