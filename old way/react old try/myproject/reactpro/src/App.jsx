import UserGreeting from "./UserGreeting";

function App() {
  return (
    <div className="App">
      <UserGreeting isLoggedIn={true} username="Kishan" />
    </div>
  );
}

export default App;
