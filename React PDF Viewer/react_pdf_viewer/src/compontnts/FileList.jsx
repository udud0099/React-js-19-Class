import React from "react";
import ChatGPT from "./ChatGPT";

const FileList = () => {
  const files = [
    { name: "cv.pdf", url: "/path/to/nagrikta.pdf", type: "pdf" },
    { name: "login.png", url: "/path/to/passport.jpg", type: "image" },
  ];
  return (
    <div>
      <div className="p-4">
        {files.map((file, index) => (
          <ChatGPT key={index} file={file} />
        ))}
      </div>
    </div>
  );
};

export default FileList;
