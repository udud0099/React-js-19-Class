import React, { useState } from "react";
import { LuDownload } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const ChatGPT = ({ file }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePreview = () => {
    setShowPopup(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.name;
    link.click();
  };

  const handleDelete = () => {
    alert(`Deleted: ${file.name}`);
    // Implement delete logic here (e.g., remove from state or API call)
  };
  return (
    <div>
      <div>
        <div className="space-y-1 flex justify-between">
          <a href="#" onClick={handlePreview}>
            {file.name}
          </a>
          <div className="flex gap-2">
            <LuDownload onClick={handleDownload} className="cursor-pointer" />
            <RiDeleteBin6Line
              onClick={handleDelete}
              className="cursor-pointer text-red-500"
            />
          </div>
        </div>

        {/* Popup for file preview */}
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-red-500"
                onClick={() => setShowPopup(false)}
              >
                ✖
              </button>
              {file.type === "pdf" ? (
                <iframe src={file.url} width="500" height="400" />
              ) : (
                <img
                  src={file.url}
                  alt={file.name}
                  className="max-w-full max-h-96"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatGPT;
