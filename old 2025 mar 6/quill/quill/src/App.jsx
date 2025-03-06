import { useState } from "react";

import "./App.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [count, setCount] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ script: "sub" }, { script: "super" }],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "script",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
    "video",
    "color",

    "background",
  ];

  const handleSave = () => {
    console.log("final", count);
  };
  return (
    <>
      <h1>hello</h1>
      <div>
        <ReactQuill
          theme="snow"
          value={count}
          onChange={setCount}
          modules={modules}
          formats={formats}
        />
      </div>
    </>
  );
}
// https://www.youtube.com/watch?v=DKpWTwC0Exk
export default App;
