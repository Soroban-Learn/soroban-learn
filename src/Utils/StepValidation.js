import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import toast from "react-simple-toasts";
import {
  currentLessonState,
  ideCodeState,
  LineNumbersState,
  BlockedRangesState,
} from "../Utils/RecoilState";

export function useStepValidation(
  currentStep,
  setCurrentContentStep,
  consoleInput,
  setHasError,
  setCurrentError
) {
  const [lessonContent] = useRecoilState(currentLessonState);
  const [ideCode, setIdeCode] = useRecoilState(ideCodeState);
  const [lineNumbers, setLineNumbers] = useRecoilState(LineNumbersState);
  const [blockedRanges, setBlockedRanges] = useRecoilState(BlockedRangesState);

  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      toast(error + "! Please try again.", {
        position: "top-right",
        duration: 3000,
        className: "error-toast",
      });
      setError("");
    }
  }, [error]);

  if (
    lessonContent &&
    lessonContent.steps &&
    lessonContent.steps[currentStep] &&
    lessonContent.steps[currentStep].instructions
  ) {
    const instructions = lessonContent.steps[currentStep].instructions;

    let accumulatedInput = "";
    for (let i = 0; i < currentStep; i++) {
      if (
        lessonContent.steps[i] &&
        lessonContent.steps[i].instructions &&
        lessonContent.steps[i].instructions[0].type === "code"
      ) {
        accumulatedInput += lessonContent.steps[i].instructions[0].input;
      }
    }

    const validateStep = () => {
      instructions.forEach((instruction) => {
        if (instruction.type === "terminal") {
          if (instruction.input === consoleInput) {
            setCurrentContentStep(currentStep + 1);
          } else {
            setHasError(true);
            setCurrentError("Invalid Command");
          }
        } else if (instruction.type === "code") {
          const ideCodeSingleLine = ideCode.replace(/\s+/g, "");

          if (ideCodeSingleLine === accumulatedInput + instruction.input) {
            setCurrentContentStep(currentStep + 1);
          } else {
            setError("Invalid Code");
          }
        }
      });
    };

    return { validateStep };
  }

  return {};
}
