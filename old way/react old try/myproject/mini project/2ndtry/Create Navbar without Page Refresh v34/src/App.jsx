import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import AddLinkIcon from "@mui/icons-material/AddLink";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
