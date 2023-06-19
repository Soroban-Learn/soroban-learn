import React from "react";
import Logo from "../../Assets/Images/logo.svg";
import Glows from "../../Assets/Images/glows.svg";
import Arrows from "../../Assets/Images/arrows.svg";
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

      <section>
        <div className="container mx-auto">
          <h1 className="text-9xl text-white font-extralight mb-16 mt-16">
            New to <span className="font-medium">Soroban</span>?
          </h1>
          <div className="flex justify-between">
            <div className="w-[475px] relative">
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
              <img src={HomeCode} alt="Home Code" />
              <img
                src={Glows}
                alt="glows"
                className="absolute top-0 right-0 opacity-60 -z-10 moving-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
