export function StepValidation(
  currentStep,
  setCurrentContentStep,
  consoleInput,
  setHasError,
  setCurrentError
) {
  if (currentStep === 0) {
    if (consoleInput === "cargo new --lib hello-world") {
      setCurrentContentStep(currentStep + 1);
    }
  } else {
    setHasError(true);
    setCurrentError("Invalid Command");
  }
}
