// v 19
import Hello from "./components/Hello";

function App() {
  const stuli = [
    {
      name: "Gatappa",
      age: 90,
      role: "body gard",
    },
    {
      name: "Rajmata",
      age: 40,
      role: "King maker",
    },
    {
      name: "Valal Dev",
      age: 10,
      role: "Bad Guy",
    },
    {
      name: "Elephant Shing",
      age: 40,
      role: "Angry man",
    },
    {
      name: "Kali Keti",
      age: 40,
      role: "Qute girl",
    },
  ];
  return (
    <div className="App">
      <Hello stuli={stuli} />
      {/* <Hello message="Hello sis" name="Dischha" /> */}
    </div>
  );
}

export default App;
