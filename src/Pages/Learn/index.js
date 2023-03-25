import React, { useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { rust } from "@codemirror/lang-rust";
import { ViewPlugin, Decoration } from "@codemirror/view";
import { EditorView } from "codemirror";
import { RangeSet } from "@codemirror/rangeset";
import Logo from "../../Assets/Images/logo.svg";

const lineToDisable = 0;

// const rangeSet = RangeSet.of([
//   {
//     from: 0,
//     to: 0,
//     mode: "disabled", // Disable the line
//   },
// ]);

function Learn() {
  const code = `[package]
name = "hello-world"
version = "0.1.0"
edition = "2021"`;

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="h-[80px] grid grid-cols-3 items-stretch py-6 px-6">
        <div>
          <i className="fa-solid fa-bars mr-4 cursor-pointer" />
          <span className="mr-auto">Getting Started</span>
        </div>
        <div className="flex justify-center">
          <img src={Logo} alt="SorobanLearn" />
        </div>
      </div>
      {/* CORE */}
      <div className="h-full flex gap-4">
        <div className="w-1/3 flex flex-col gap-4">
          {/* Exercise */}
          <div className="px-12 h-full">
            <h3 className="text-lg leading-loose">Current Exercise</h3>
            <h2 className="text-5xl font-semibold mb-6">Hello World</h2>
            <p className="text-base leading-snug">
              This is exercise will help you in creating your first “Hello
              World!” contract.
            </p>
            <h4 className="text-2xl font-bold leading-loose mt-4 mb-2">
              Create New Project
            </h4>
            <p className="text-base leading-snug">
              To the right and bottom of this application you should see a tab
              for the console. To create your project type the following and
              press “enter”
            </p>
            <div className="bg-[#282828] rounded-md mt-6 p-4 flex items-center justify-between">
              <code>cargo new --lib hello-world</code>
              <i className="fa-light fa-copy cursor-pointer" />
            </div>
          </div>

          {/* File Explorer */}
          <div className="bg-[#282828] h-[400px]">1</div>
        </div>

        <div className="w-full flex flex-col gap-4">
          {/* Code Editor */}
          <div className="bg-[#232323] rounded-tl-lg rounded-bl-lg p-6 h-full">
            <CodeMirror
              value={code}
              className="rounded-tl-lg rounded-bl-lg"
              height="100%"
              theme="dark"
              extensions={[EditorView.lineWrapping, rust()]}
              onChange={onChange}
            />
          </div>

          {/* Console */}
          <div className="h-[400px] flex flex-col">
            <div>
              <div className="bg-[#282828] w-fit px-11 py-3 rounded-tr-lg text-base font-bold">
                Console
              </div>
            </div>
            <div className="bg-[#282828] h-full p-6">
              <div>
                <span className="text-lg leading-relaxed text-purple-500">
                  soroban-learn/projects
                </span>
                <div>
                  <span>%</span>
                  <input
                    type="text"
                    className="bg-transparent ml-2 border-transparent focus:border-transparent focus:ring-0 !outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
