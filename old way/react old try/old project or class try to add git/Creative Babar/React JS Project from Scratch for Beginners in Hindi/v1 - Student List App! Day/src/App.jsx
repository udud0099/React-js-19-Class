import "./App.css";
import List from "./components/List";
import Data from "./components/Data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <div>
        <h3>{people.length} Student</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </div>
    </>
  );
}

export default App;
