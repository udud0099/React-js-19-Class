import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <Link to="/">Home Page</Link>
      <Link to="/dashboard">Dashboard Page</Link>
      <Link to="/aa">Page Not found Page</Link>
    </>
  );
}
