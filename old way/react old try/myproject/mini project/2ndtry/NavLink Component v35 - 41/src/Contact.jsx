import { NavLink, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
export default function Contact() {
  return (
    <>
      <NavBar />
      <h1>Contact page</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="youtube">Youtube </NavLink>
          </li>
          <li>
            <NavLink to="twitter">Twitter </NavLink>
          </li>
          <li>
            <NavLink to="github">Github </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
