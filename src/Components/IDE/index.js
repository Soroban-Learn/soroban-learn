import React, { useRef, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { debounce } from "throttle-debounce";

// import readOnlyRangesExtension from "./readOnlyRangesExtension";

import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { EditorState } from "@codemirror/state";
import { rust } from "@codemirror/lang-rust";
import { ViewPlugin, Decoration, EditorView } from "@codemirror/view";
import { Extension } from "@codemirror/state";
import { RangeSet } from "@codemirror/rangeset";
import { useCodeMirror } from '@uiw/react-codemirror';


import {
  ideCodeState,
  ideEditRulesState,
  LineNumbersState,
  BlockedRangesState
} from "../../Utils/RecoilState";

let editor  = null;

function IDE(isDisabled) {
  const [ideCode, setIdeCode] = useRecoilState(ideCodeState);
  const [editRules, setEditRules] = useRecoilState(ideEditRulesState);
  const [lineNumbers, setLineNumbers] = useRecoilState(LineNumbersState);

  const [ blockedRanges, setBlockedRanges ] = useRecoilState(BlockedRangesState);

  const FontSizeTheme = EditorView.theme({
    "&": {
      fontSize: "12pt",
    },
  });

  const FontSizeThemeExtension = [FontSizeTheme];

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('on change');
    console.log(value);
    console.log(viewUpdate);
    
    setIdeCode(value);
  }, []);

  const getReadOnlyRanges = (targetState) => {
    const ranges = [];

    lineNumbers.forEach((line) => {
      ranges.push({
        from: targetState.doc.line(line+1).from,
        to: targetState.doc.line(line+1).to,
      });
    });

    return ranges;
  };

  const [editorState, setEditorState] = useState();
  const [editorView, setEditorView] = useState();

  // const refs = React.useRef();

  // useEffect(() => {
  //   if (refs.current) {
  //     editor = refs.current.editor;

  //     editor.oncuechange = (a,b) => {
  //       console.log('cue change');
  //       console.log(a,b);
  //     }

  //     console.log(editor);
  //   }
  // }, [refs]);
      
  // const editor = useRef();
  // const { setContainer } = useCodeMirror({
  //   container: editor.current,
  //   extensions: [
  //     EditorView.lineWrapping,
  //     FontSizeThemeExtension,
  //     rust(), 
  //     readOnlyRangesExtension(getReadOnlyRanges),
  //   ],
  //   value: ideCode,
  //   onChange: onChange,
  //   editable: isDisabled,
  //   className: "rounded-tl-lg rounded-bl-lg",
  //   height: "100%",
  //   maxHeight: "50vh",
  //   theme: "dark",
  // });

  // useEffect(() => {
  //   if (editor.current) {
  //     setContainer(editor.current);
  //   }
  // }, [editor.current]);


  const readOnlyTransactionFilter = () => {
    return EditorState.transactionFilter.of((tr) => {
     
      return [];

      // return tr
    });
  };

  readOnlyTransactionFilter();

  const onCreateEditor = (view, state) => {
    console.log('editor create');

    setEditorState(state);
    setEditorView(view);

    view.dom.addEventListener("beforechange", (event) => {
      console.log('before change');
      console.log(event);
    });
  };


  return (
    <div className="bg-[#232323] rounded-tl-lg rounded-bl-lg p-6 h-full">
      {/* <div ref={editor} /> */}
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
          EditorState.changeFilter.of((tr) => {
            // tr.newSelection.main.map(/*ChangeDesc*/)
            const ranges = blockedRanges;
            console.log(ranges);
            return ranges;
          })
          // readOnlyTransactionFilter,
          // readOnlyRangesExtension(getReadOnlyRanges),
        ]}
        onChange={onChange}
        onCreateEditor={onCreateEditor}
        editable={isDisabled}
        // ref={refs}
      />
    </div>
  );
}

export default IDE;
