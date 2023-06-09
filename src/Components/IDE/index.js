import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { debounce } from "throttle-debounce";

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

  const FontSizeTheme = EditorView.theme({
    "&": {
      fontSize: "12pt",
    },
  });

  const FontSizeThemeExtension = [FontSizeTheme];

  const onChange = React.useCallback((value, viewUpdate) => {
    setIdeCode(value);
  }, []);

  // const getReadOnlyRanges = (targetState) => {
  //   const ranges = [];

  //   lineNumbers.forEach((line) => {
  //     ranges.push({
  //       from: targetState.doc.line(line + 1).from,
  //       to: targetState.doc.line(line + 1).to,
  //     });
  //   });

  //   return ranges;
  // };

  return (
    <div className="bg-[#232323] rounded-tl-lg rounded-bl-lg p-6 h-full">
      <CodeMirror
        value={ideCode}
        className="rounded-tl-lg rounded-bl-lg"
        height="100%"
        maxHeight="50vh"
        theme="dark"
        extensions={[
          EditorView.lineWrapping,
          FontSizeThemeExtension,
          rust(),
          // readOnlyRangesExtension(getReadOnlyRanges),
        ]}
        onChange={onChange}
        editable={isDisabled}
      />
    </div>
  );
}

export default IDE;
