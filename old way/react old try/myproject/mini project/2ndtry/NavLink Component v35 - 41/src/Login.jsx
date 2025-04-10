import NavBar from "./NavBar";
import { useLocation, useParams } from "react-router-dom";
export default function Login() {
  // this fname have to same
  const { fname, lname } = useParams();
  const location = useLocation();

  console.log(location);
  return (
    <>
      <NavBar />
      <h1>Login page</h1>
      <h2>
        Hello bro : {fname} and {lname}
      </h2>
      <h3>{location.pathname}</h3>
      <p>
        {location.pathname == "/login/fname/lname" ? (
          <button>ok Get Url</button>
        ) : null}
      </p>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>

      <button type="button" class="btn btn-link">
        Link
      </button>
    </>
  );
}
