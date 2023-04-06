import React, { useEffect, useState } from "react";

// Packages
import ReactMarkdown from "react-markdown";
import { useRecoilState } from "recoil";

// Assets
import Logo from "../../Assets/Images/logo.svg";
import CreateNewProjectMarkdownFile from "../../LearningMaterial/HelloWorld/Configuration/CreateNewProject.md";
import UpdateCargoMarkdownFile from "../../LearningMaterial/HelloWorld/Configuration/UpdateCargoFile.md";
import ImportSDK from "../../LearningMaterial/HelloWorld/Configuration/ImportSDK.md";
import ConfigureReleaseFile from "../../LearningMaterial/HelloWorld/Configuration/ConfigureReleaseFile.md";
import ReleaseWithLogs from "../../LearningMaterial/HelloWorld/Configuration/ReleaseWithLogs.md";
import WrappingItUp from "../../LearningMaterial/HelloWorld/Configuration/WrappingItUp.md";

import WriteAContract from "../../LearningMaterial/HelloWorld/ContractDevelopment/WriteAContract.md";
import IncludeTheSDK from "../../LearningMaterial/HelloWorld/ContractDevelopment/IncludeTheSDK.md";
import CreateFunction from "../../LearningMaterial/HelloWorld/ContractDevelopment/CreateFunction.md";

// Components
import IDE from "../../Components/IDE";
import Terminal from "../../Components/Terminal";
import FileExplorer from "../../Components/FileExplorer";

// Utils
import { H2, H3, H4, P, Code, A } from "../../Utils/MarkDownFunctions";
import { currentStepState } from "../../Utils/RecoilState";

function Learn() {
  const [markdown, setMarkdown] = useState("");
  const [currentStep, setCurrentContentStep] = useRecoilState(currentStepState);

  useEffect(() => {
    const steps = [
      CreateNewProjectMarkdownFile,
      UpdateCargoMarkdownFile,
      ImportSDK,
      ConfigureReleaseFile,
      ReleaseWithLogs,
      WrappingItUp,
      WriteAContract,
      IncludeTheSDK,
      CreateFunction,
    ];

    // Fetch Markdown
    fetch(steps[currentStep])
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, [currentStep]);

  const fileStructure = [
    {
      title: "Main",
      type: "folder",
      children: [
        {
          title: "src.rs",
          type: "file",
        },
      ],
    },
  ];

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
            <ReactMarkdown
              children={markdown}
              components={{ p: P, h2: H2, code: Code, h3: H3, h4: H4, a: A }}
            />
            <button
              className="bg-indigo-600 py-2 px-4 rounded-md mt-5 float-right"
              onClick={() => setCurrentContentStep(currentStep + 1)}
            >
              Next Step
            </button>
          </div>

          <FileExplorer fileStructure={fileStructure} />
        </div>

        <div className="w-full flex flex-col gap-4">
          <IDE />

          <Terminal />
        </div>
      </div>
    </div>
  );
}

export default Learn;
