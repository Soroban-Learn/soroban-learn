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

let lastInsert = null;
let lastValue = "";
let lastInsertText = "";

function IDE(isDisabled) {
  const [theCode, setTheCode] = useState("");
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

  const onChange = (value, viewUpdate) => {
    if (!viewUpdate || !viewUpdate.changes || !viewUpdate.changes.inserted) {
      return;
    }

    const newInsert = viewUpdate.changes.inserted;
    const unifiedInsertText = newInsert
    .map((textLeaf) => textLeaf.text.join(""))
    .join("");

    //changes.inserted of structure:
    // changes.insert: array of textleaf
    //text leaf is object with property text consisting of array of strings

    //if the changes.inserted is the same as the last insert, then it is a duplicate
    //insert and we should ignore it

    // const isDuplicateInsert = (thisInsert) => {
    //   let isDup = true;

    //   if (!lastInsert) {
    //     return false;
    //   }

 
      

    //   thisInsert.forEach((textLeaf, index) => {
    //     const lastInsertLeaf = lastInsert[index];

    //     if (!textLeaf || !lastInsertLeaf) {
    //       isDup = false;
    //       return;
    //     }
        
    //     if (!textLeaf.text || !lastInsertLeaf.text) {
    //       isDup = false;
    //       return;
    //     }

    //     if (textLeaf.text.join("") !== lastInsertLeaf.text.join("")) {
    //       isDup = false;
    //       return;
    //     }

    //     if (textLeaf.length <= 2) {
    //       isDup = false;
    //       return;
    //     }
    //   });

    //   return isDup;
    // };

    const isDup = unifiedInsertText === lastInsertText && unifiedInsertText.length > 1;

    if (isDup) {
      console.log("duplicate insert");
      setTheCode(lastValue + "");
      lastInsertText = "";
    } else {
      setTheCode(value);
      lastInsertText = unifiedInsertText;
    }

    lastInsert = viewUpdate.changes.inserted;
    lastValue = value;
  };

  const throttledChange = debounce(500, (value, viewUpdate) => {
    setIdeCode(value);
  });

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
    console.log("[[[lines]]]", lines);
    const ranges = [];

    // for each of the lines find the start and end index of that line
    // and add it to the ranges array
    // check that code is longer than the largest line number

    // lines.forEach((line) => {
    //   ranges.push({
    //     from: targetState.doc.line(line.start).from,
    //     to: targetState.doc.line(line.end).to,
    //   });
    // });

    lineNumbers.forEach((line) => {
      ranges.push({
        from: targetState.doc.line(line + 1).from,
        to: targetState.doc.line(line + 1).to,
      });
    });

    console.log(" get read only ranges");
    console.log(targetState);

    // if (targetState.doc.length > 50) {
    //   ranges.push({
    //     from: targetState.doc.line(3).from,
    //     to: targetState.doc.line(4).to,
    //   })

    //   ranges.push({
    //     from: targetState.doc.line(5).from,
    //     to: targetState.doc.line(7).to,
    //   })
    // }

    console.log(code);

    console.log("[[[ranges]]]", ranges);

    return ranges;
  };

  const editor = useRef();

  console.log("[[[editor]]]", editor);

  return (
    <div className="bg-[#232323] rounded-tl-lg rounded-bl-lg p-6 h-full">
      <CodeMirror
        value={theCode}
        className="rounded-tl-lg rounded-bl-lg"
        height="100%"
        theme="dark"
        extensions={[
          EditorView.lineWrapping,
          FontSizeThemeExtension,
          // rust(),
          readOnlyRangesExtension(getReadOnlyRanges),
        ]}
        onChange={onChange}
        editable={isDisabled}
      />
    </div>
  );
}

export default IDE;
