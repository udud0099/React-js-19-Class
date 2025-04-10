import { createContext } from "react";
import "./App.css";
import ChildA from "./ChildA";
import Memo from "./Memo";

const fName = createContext();
const lName = createContext();

function App() {
  return (
    <>
      <Memo />
      <fName.Provider value={"i am sending FName"}>
        <lName.Provider value={"i am sending LName"}>
          <ChildA />
        </lName.Provider>
      </fName.Provider>
    </>
  );
}

export default App;
export { fName, lName };
