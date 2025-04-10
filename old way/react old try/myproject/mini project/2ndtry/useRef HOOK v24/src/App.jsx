import CardBox from "./components/CardBox";
import ChangeBg from "./components/ChangeBg";
import Clock from "./components/Clock";
import Form from "./components/Form";
import IncDecByNY from "./components/IncDecByMy";
import Ref from "./components/Ref";
// import "./App.css";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Ref />
      <br />
      <br />
      {/* <IncDecByNY /> */}
      <br />
      <br />

      <Form />
      <br />
      <br />
      <br />
      <ChangeBg />
      <Clock />
      <CardBox />
    </div>
  );
}

export default App;
