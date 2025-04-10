import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOme </NavLink>
            <NavLink to="/about">about </NavLink>
            <NavLink to="/contact">contact </NavLink>
            <NavLink to="/login/fname/lname">login </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
