import React, { useEffect, useState } from "react";

// Packages
import ReactMarkdown from "react-markdown";
import { useRecoilState } from "recoil";

// Assets
import Logo from "../../Assets/Images/logo.svg";

// Components
import IDE from "../../Components/IDE";
import Terminal from "../../Components/Terminal";
import FileExplorer from "../../Components/FileExplorer";

// Utils
import { H2, H3, H4, P, Code, A } from "../../Utils/MarkDownFunctions";
import { currentStepState, currentLessonState } from "../../Utils/RecoilState";
import { useStepValidation } from "../../Utils/StepValidation";

// Learn Content
import helloWorld from "../../LearningMaterial/HelloWorldNew/helloWorld.json";

function Learn() {
  const [currentStep, setCurrentContentStep] = useRecoilState(currentStepState);
  const [lessonContent, setLessonContent] = useRecoilState(currentLessonState);
  const [stepType, setStepType] = useState("");
  const { validateStep } = useStepValidation(
    currentStep,
    setCurrentContentStep
  );
  useEffect(() => {
    setLessonContent(helloWorld);
  }, []);

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

  const handleStepProgression = () => {
    validateStep();
  };

  useEffect(() => {
    setStepType(
      (lessonContent?.steps &&
        lessonContent.steps.length &&
        lessonContent.steps[currentStep]?.stepType) ||
        ""
    );
  }, [currentStep, lessonContent]);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="h-[80px] grid grid-cols-3 items-stretch py-6 px-6">
        <div>
          {/* <i className="fa-solid fa-bars mr-4 cursor-pointer" /> */}
          <span className="mr-auto">Hello World!</span>
        </div>
        <div className="flex justify-center">
          <img src={Logo} alt="SorobanLearn" />
        </div>
      </div>
      {/* CORE */}
      <div
        className="flex gap-4"
        style={{
          height: "calc(100vh - 80px)",
        }}
      >
        <div className="w-2/5 flex flex-col gap-4">
          {/* Exercise */}
          <div className="px-12 h-full overflow-scroll">
            {lessonContent.steps &&
              currentStep < lessonContent.steps.length && (
                <>
                  <h3 className="text-lg leading-loose">Current Exercise</h3>
                  <h2 className="text-5xl font-semibold mb-6">
                    {lessonContent.title}
                  </h2>
                </>
              )}
            {/* Sidebar */}
            <div>
              {lessonContent.steps &&
              currentStep < lessonContent.steps.length ? (
                <>
                  <h3 className="text-lg leading-loose">
                    {lessonContent.steps[currentStep].stepTitle}
                  </h3>
                  <ReactMarkdown
                    children={lessonContent.steps[currentStep].sectionContent}
                    components={{
                      p: P,
                      h2: H2,
                      code: Code,
                      h3: H3,
                      h4: H4,
                      a: A,
                    }}
                  />
                </>
              ) : (
                <div className="text-center">
                  <h3 className="text-xl leading-loose mt-10 font-bold">
                    Thank you for testing SorobanLearn!
                  </h3>
                  <p>
                    SorobanLearn is still in development. If you have any
                    feedback or suggestions, please reach out to us on Discord.
                  </p>

                  <a
                    href="https://discord.gg/xYdDBnRVK5"
                    target="_blank"
                    className="bg-indigo-600 py-2 px-4 mt-6 block w-fit mx-auto"
                    rel="noreferrer"
                  >
                    Join our Discord
                  </a>
                </div>
              )}
            </div>
            {stepType !== "terminal" &&
              lessonContent.steps &&
              currentStep < lessonContent.steps.length && (
                <button
                  className="bg-indigo-600 py-2 px-4 rounded-md mt-5 float-right"
                  onClick={() => handleStepProgression()}
                >
                  Next Step
                </button>
              )}
          </div>

          {/* <FileExplorer fileStructure={fileStructure} /> */}
        </div>

        <div className="w-full flex flex-col gap-4">
          <IDE isDisabled={stepType === "terminal"} />

          <Terminal />
        </div>
      </div>
    </div>
  );
}

export default Learn;
