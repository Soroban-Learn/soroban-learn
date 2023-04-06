import React, { useState } from "react";

export function H2(props) {
  return <h2 className="text-5xl font-semibold mb-6">{props.children}</h2>;
}

export function H3(props) {
  return <h3 className="text-lg leading-loose">{props.children}</h3>;
}

export function H4(props) {
  return (
    <h4 className="text-2xl font-bold leading-loose mt-4 mb-2">
      {props.children}
    </h4>
  );
}

export function P(props) {
  return <p className="text-base leading-snug my-2">{props.children}</p>;
}

export function Code(props) {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(props.children);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative pb-2">
      <div className="bg-[#282828] rounded-md my-6 p-4 flex items-center justify-between">
        <code className="break-normal whitespace-pre-wrap">
          {props.children}
        </code>
        <i
          className="fa-light fa-copy cursor-pointer"
          onClick={() => copyText()}
        />
      </div>
      {copied && (
        <span className="text-green-500 text-sm ml-2 absolute right-0 bottom-0">
          Copied to clipboard
        </span>
      )}
    </div>
  );
}
