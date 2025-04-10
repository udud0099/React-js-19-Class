import { Link, useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const { username } = location.state || {};
  return (
    <>
      <h1>Dashboard Profile Pages for {username}</h1>

      <Link to="/">Home Page</Link>
    </>
  );
}
