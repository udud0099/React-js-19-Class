import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard Pages</h1>

      <Link to="profile">Profile Page</Link>
      <Link to="setting">Setting Page</Link>
      <Outlet />
    </>
  );
}
