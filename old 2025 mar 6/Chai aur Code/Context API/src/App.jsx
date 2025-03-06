import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Profile />
      <Login />
    </UserContextProvider>
  );
}

export default App;
