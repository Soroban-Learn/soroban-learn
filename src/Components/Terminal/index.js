import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { StepValidation } from "../../Utils/StepValidation";
import {
  currentStepState,
  currentErrorState,
  hasErrorState,
} from "../../Utils/RecoilState";

function Terminal() {
  const [consoleInputs, setConsoleInputs] = useState([]);
  const [consoleInput, setConsoleInput] = useState("");
  const [currentStep, setCurrentContentStep] = useRecoilState(currentStepState);
  const [, setHasError] = useRecoilState(hasErrorState);
  const [, setCurrentError] = useRecoilState(currentErrorState);

  const handleConsoleSubmit = (e) => {
    e.preventDefault();
    setConsoleInputs([...consoleInputs, consoleInput]);
    StepValidation(
      currentStep,
      setCurrentContentStep,
      consoleInput,
      setHasError,
      setCurrentError
    );
    setConsoleInput("");
  };
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
          <form onSubmit={handleConsoleSubmit}>
            <div className="flex">
              <span>%</span>
              <input
                type="text"
                className="bg-transparent ml-2 border-transparent focus:border-transparent focus:ring-0 !outline-none w-full"
                onChange={(e) => setConsoleInput(e.target.value)}
                value={consoleInput}
              />
            </div>
          </form>

          <div>
            {consoleInputs?.map((input, index) => (
              <div key={index}>{input}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
