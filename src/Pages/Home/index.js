import React from "react";
import Logo from "../../Assets/Images/logo.svg";
import Glows from "../../Assets/Images/glows.svg";
import Arrows from "../../Assets/Images/arrows.svg";
import Rocket from "../../Assets/Images/rocket.svg";
import Steps from "../../Assets/Images/steps.svg";
import Resources from "../../Assets/Images/resources.svg";
import HomeCode from "../../Assets/Images/homecode.png";

import "./Animations.scss";

function Home() {
  return (
    <div id="top">
      <header className="py-[35px]">
        <div className="container mx-auto flex justify-between">
          <img src={Logo} className="SorobanLearn" alt="logo" />
          <div className="flex gap-[25px]">
            <a
              href="/"
              className="w-12 h-12 bg-white border-2 border-white text-black flex justify-center items-center hover:bg-transparent hover:text-white transition-all duration-500"
            >
              <i className="fa-brands fa-discord" />
            </a>
            <a
              href="/"
              className="border-2 border-white flex justify-center items-center px-6 hover:bg-white hover:text-black transition-all duration-500"
            >
              Explore Now
            </a>
          </div>
        </div>
      </header>

      <section className="py-10 sm:py-20 overflow-x-hidden relative">
        <div className="container mx-auto">
          <h1 className="text-7xl sm:text-9xl text-white font-extralight mb-16 mt-16">
            New to <span className="font-medium">Soroban</span>?
          </h1>
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="w-fill lg:w-[475px] relative">
              <img
                src={Arrows}
                alt="Arrows"
                className="absolute -z-10 -top-10 -left-14 moving-image"
              />
              <p className="text-xl leading-7 text-white mb-6 mt-6">
                Soroban Learn is a tool that makes it easy for new developers to
                get their feet wet into learning the basics of creating smart
                contracts in Soroban.
              </p>
              <p className="text-lg leading-relaxed text-gray-400 mb-12">
                It will walk you through creating your first “Hello World”
                contract and finish up with a token swap contract.
              </p>
              <a href="/" className="bg-indigo-700 px-10 py-3 inline-block">
                Get Started
              </a>
            </div>

            <div>
              <img
                src={HomeCode}
                alt="Home Code"
                className="w-full lg:w-auto"
              />
              <img
                src={Glows}
                alt="glows"
                className="absolute top-0 right-0 opacity-60 -z-10 moving-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex justify-between gap-[130px] flex-col lg:flex-row">
            <div className="flex flex-col justify-center items-center text-center gap-5">
              <img src={Rocket} alt="Rocket" className="max-w-[250px]" />
              <h2 className="text-center text-white text-[24px] font-medium">
                No Local Setup
              </h2>
              <p className="text-center text-slate-400 text-[18px] font-normal">
                Soroban Learn requires no local setup. No need to install any
                packages or even open your code editor
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-5">
              <img src={Steps} alt="Steps" className="max-w-[250px]" />
              <h2 className="text-center text-white text-[24px] font-medium">
                Step by step instructions
              </h2>
              <p className="text-center text-slate-400 text-[18px] font-normal">
                Soroban Learn requires no local setup. No need to install any
                packages or even open your code editor
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-5">
              <img src={Resources} alt="Resources" className="max-w-[250px]" />
              <h2 className="text-center text-white text-[24px] font-medium">
                Post Resources
              </h2>
              <p className="text-center text-slate-400 text-[18px] font-normal">
                Soroban Learn requires no local setup. No need to install any
                packages or even open your code editor
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
