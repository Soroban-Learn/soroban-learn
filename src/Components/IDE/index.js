import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { rust } from "@codemirror/lang-rust";
import { ViewPlugin, Decoration, EditorView } from "@codemirror/view";
import { Extension } from "@codemirror/state";
import { RangeSet } from "@codemirror/rangeset";

function IDE() {
  const code = `[package]
name = "hello-world"
version = "0.1.0"
edition = "2021"`;

  const FontSizeTheme = EditorView.theme({
    "&": {
      fontSize: "12pt",
    },
  });

  const FontSizeThemeExtension = [FontSizeTheme];

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div className="bg-[#232323] rounded-tl-lg rounded-bl-lg p-6 h-full">
      <CodeMirror
        value={code}
        className="rounded-tl-lg rounded-bl-lg"
        height="100%"
        theme="dark"
        extensions={[EditorView.lineWrapping, FontSizeThemeExtension, rust()]}
        onChange={onChange}
      />
    </div>
  );
}

export default IDE;
