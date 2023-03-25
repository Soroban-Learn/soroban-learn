import React from "react";

function Terminal() {
  return (
    <div className="h-[400px] flex flex-col">
      <div>
        <div className="bg-[#282828] w-fit px-11 py-3 rounded-tr-lg text-base font-bold">
          Console
        </div>
      </div>
      <div className="bg-[#282828] h-full p-6">
        <div>
          <span className="text-lg leading-relaxed text-purple-500">
            soroban-learn/projects
          </span>
          <div>
            <span>%</span>
            <input
              type="text"
              className="bg-transparent ml-2 border-transparent focus:border-transparent focus:ring-0 !outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
