import React from "react";

function FileExplorer({ fileStructure }) {
  const processFileStructure = (fileStructure) => {
    return fileStructure.map((item) => {
      return (
        <div className="flex flex-col">
          <div className="flex items-center mb-3 cursor-pointer">
            <i
              className={`fa-solid ${
                item.type === "folder" ? "fa-sort-down -mt-1" : "fa-file"
              } mr-2`}
            />
            <span>{item.title}</span>
          </div>
          {item.children && (
            <div className="ml-6">{processFileStructure(item.children)}</div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="bg-[#282828] h-[400px] p-5">
      {processFileStructure(fileStructure)}
    </div>
  );
}

export default FileExplorer;
