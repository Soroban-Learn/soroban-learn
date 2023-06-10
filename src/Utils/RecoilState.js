import { atom } from "recoil";

const currentStepState = atom({
  key: "currentStepStateKey",
  default: 0,
});

const currentErrorState = atom({
  key: "currentErrorStateKey",
  default: "",
});

const hasErrorState = atom({
  key: "hasErrorStateKey",
  default: false,
});

const currentLessonState = atom({
  key: "currentLessonStateKey",
  default: {},
});

const ideCodeState = atom({
  key: "ideCodeStateKey",
  default: "",
});

const ideEditRulesState = atom({
  key: "ideEditRulesStateKey",
  default: [],
});

const LineNumbersState = atom({
  key: "LineNumbersStateKey",
  default: [],
});

const BlockedRangesState = atom({
  key: "BlockedRangesStateKey",
  default: [],
});

export {
  currentStepState,
  currentErrorState,
  hasErrorState,
  currentLessonState,
  ideCodeState,
  ideEditRulesState,
  LineNumbersState,
  BlockedRangesState
};
