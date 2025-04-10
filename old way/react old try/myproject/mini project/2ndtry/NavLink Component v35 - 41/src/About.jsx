import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
export default function About() {
  const naviagte = useNavigate();
  function goContact() {
    naviagte("/contact");
  }
  const back = () => {
    naviagte(-1);
  };
  return (
    <>
      <NavBar />
      <h1>About page</h1>
      <button onClick={goContact}>Go to contact</button>
      <button onClick={back}>Gobackk</button>
    </>
  );
}
