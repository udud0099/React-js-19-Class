import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import AddLinkIcon from "@mui/icons-material/AddLink";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Error from "./Error";
// import { Github, Twitter, Youtube } from "@mui/icons-material";
import Github from "./Github";
import Twitter from "./Twitter";
import Youtube from "./Youtube";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="youtube" element={<Youtube />} />
            <Route path="twitter" element={<Twitter />} />
            <Route path="github" element={<Github />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/login/:fname/:lname" element={<Login />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
