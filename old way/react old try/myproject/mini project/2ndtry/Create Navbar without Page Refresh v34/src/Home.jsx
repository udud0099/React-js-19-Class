import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HOme </Link>
            <Link to="/about">about </Link>
            <Link to="/contact">contact </Link>
            <Link to="/login">login </Link>
          </li>
        </ul>
      </nav>
      <h1>Home page</h1>
    </>
  );
}
