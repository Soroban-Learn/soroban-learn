import { useState } from "react";
import { useRecoilState } from "recoil";
import { currentLessonState, ideCodeState } from "../Utils/RecoilState";

export function useStepValidation(
  currentStep,
  setCurrentContentStep,
  consoleInput,
  setHasError,
  setCurrentError
) {
  const [lessonContent] = useRecoilState(currentLessonState);
  const [ideCode, setIdeCode] = useRecoilState(ideCodeState);
  const [error, setError] = useState("");

  if (
    lessonContent &&
    lessonContent.steps &&
    lessonContent.steps[currentStep] &&
    lessonContent.steps[currentStep].instructions
  ) {
    const instructions = lessonContent.steps[currentStep].instructions;

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
          let ideCodeSingleLine = ideCode.replace(/\s+/g, "");
          if (ideCodeSingleLine === instruction.input) {
            setCurrentContentStep(currentStep + 1);
            // update disabled lines based on which lines are currently active
          } else {
            setError("Invalid Code");
          }
        }
      });
    };

    return { validateStep };
  }

  // If the conditions are not met, you can return an empty object or null.
  return {}; // or return null;
}
