import React from "react";
import Logo from "../../Assets/Images/logo.svg";

function Intro() {
  return (
    <div className="container px-4 mx-auto max-w-[902px]">
      <div className="flex items-center justify-center w-full py-24">
        <img src={Logo} alt="SorobanLearn" />
      </div>
      <h1 className="text-5xl font-semibold mb-12">Soroban overview</h1>
      <p className="text-lg leading-relaxed mb-5">
        Soroban is a smart contracts platform designed to be sensible,
        built-to-scale, batteries-included, and developer-friendly.
      </p>
      <p className="text-lg leading-relaxed mb-5">
        While it works well with Stellar, a blockchain that shares its values of
        scale and sensibility, it doesn't depend on or require Stellar at all,
        and can be used by any transaction processor, including other
        blockchains, L2s, and permissioned ledgers.
      </p>
      <p className="text-lg leading-relaxed">
        This tool will walk you through creating your first smart contract using
        Soroban without the need of configuring your local machine.
      </p>

      <div className="flex justify-end mt-12">
        <button>
          Get Started <i className="fa-regular fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}

export default Intro;
