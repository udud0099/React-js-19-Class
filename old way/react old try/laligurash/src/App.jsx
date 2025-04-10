// import "./App.css";
import "./assets/css/style.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <h1>App page</h1>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
