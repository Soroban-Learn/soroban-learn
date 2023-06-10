import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import toast from "react-simple-toasts";
import {
  currentLessonState,
  ideCodeState,
  LineNumbersState,
  BlockedRangesState
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

    const i = currentStep;
    // for (let i = 0; i <= currentStep; i++) {
      if (lessonContent.steps[i] && lessonContent.steps[i].instructions) {
        // eslint-disable-next-line no-loop-func
        lessonContent.steps[i].instructions.forEach((instruction) => {
          if (instruction.type === "code") {
            accumulatedInput += instruction.input;
          }
        });
      }
    // }

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

          const charPosOfAllDoubleNewLines = [];
          let charPosOfDoubleNewLine = ideCodeSingleLine.indexOf("\n\n");

          function getAllIndexes(arr, val) {
            var indexes = [], i = -1;
            while ((i = arr.indexOf(val, i+1)) != -1){
                indexes.push(i);
            }
            return indexes;
        }
        
        const allDoubleNewLineIndexes = getAllIndexes(ideCode, "\n\n");


        const blockedRanges = [0];


          allDoubleNewLineIndexes.forEach((index) => {
            blockedRanges.push(index);
            blockedRanges.push(index + 2);
          });
        

        blockedRanges.push(ideCode.length);

        setBlockedRanges(blockedRanges);
        
        console.log("[[[blockedRanges]]]", blockedRanges);
        
          console.log("[[[ideCodeSingleLine]]]", ideCodeSingleLine);
          console.log("[[[accumulatedInput]]]", accumulatedInput);

          if (ideCodeSingleLine === accumulatedInput) {
            setCurrentContentStep(currentStep + 1);
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
