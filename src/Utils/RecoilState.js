import { atom } from "recoil";

const currentStepState = atom({
  key: "currentStepState",
  default: 0,
});

const currentErrorState = atom({
  key: "currentErrorState",
  default: "",
});

const hasErrorState = atom({
  key: "hasErrorState",
  default: false,
});

export { currentStepState, currentErrorState, hasErrorState };
