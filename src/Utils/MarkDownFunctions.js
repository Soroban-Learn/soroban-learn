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
  return <p className="text-base leading-snug mb-2">{props.children}</p>;
}

export function Code(props) {
  return (
    <div className="bg-[#282828] rounded-md mt-6 p-4 flex items-center justify-between">
      <code className="break-normal whitespace-pre-wrap">{props.children}</code>
      <i className="fa-light fa-copy cursor-pointer" />
    </div>
  );
}
