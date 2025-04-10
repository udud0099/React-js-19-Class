import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard/profile", { state: { username } });
  }
  return (
    <>
      <h1>HomePage page</h1>
      <Link to="dashboard">Dashboard</Link>
      <input
        type="text"
        name=""
        id=""
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleClick}>Go to profile page</button>
    </>
  );
}
