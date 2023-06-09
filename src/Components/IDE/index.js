import React, { useRef } from "react";
import { useRecoilState } from "recoil";

import readOnlyRangesExtension from "codemirror-readonly-ranges";
import CodeMirror from "@uiw/react-codemirror";
import { EditorState } from "@codemirror/state";
import { rust } from "@codemirror/lang-rust";
import { ViewPlugin, Decoration, EditorView } from "@codemirror/view";
import { Extension } from "@codemirror/state";
import { RangeSet } from "@codemirror/rangeset";

import {
  ideCodeState,
  ideEditRulesState,
  LineNumbersState,
} from "../../Utils/RecoilState";

function IDE(isDisabled) {
  const [ideCode, setIdeCode] = useRecoilState(ideCodeState);
  const [editRules, setEditRules] = useRecoilState(ideEditRulesState);
  const [lineNumbers, setLineNumbers] = useRecoilState(LineNumbersState);
  const code = ``;

  const FontSizeTheme = EditorView.theme({
    "&": {
      fontSize: "12pt",
    },
  });

  const FontSizeThemeExtension = [FontSizeTheme];

  const onChange = React.useCallback((value, viewUpdate) => {
    setIdeCode(value);
  }, []);

  const detectConsecutiveNumbers = (array) => {
    const ranges = [];
    let start = array[0];

    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] - array[i] !== 1) {
        ranges.push({ start, end: array[i] });
        start = array[i + 1];
      }
    }

    return ranges;
  };

  const getReadOnlyRanges = (targetState) => {
    const lines = detectConsecutiveNumbers(lineNumbers);
    const ranges = [];

    lines.forEach((line) => {
      ranges.push({
        from: targetState.doc.line(line.start).from,
        to: targetState.doc.line(line.end).to,
      });
    });

    return ranges;
  };

  const editor = useRef();

  console.log("[[[editor]]]", editor);

  return (
    <div className="bg-[#232323] rounded-tl-lg rounded-bl-lg p-6 h-full">
      <CodeMirror
        value={code}
        className="rounded-tl-lg rounded-bl-lg"
        height="100%"
        theme="dark"
        extensions={[
          EditorView.lineWrapping,
          FontSizeThemeExtension,
          rust(),
          readOnlyRangesExtension(getReadOnlyRanges),
        ]}
        onChange={onChange}
        editable={isDisabled}
      />
    </div>
  );
}

export default IDE;
