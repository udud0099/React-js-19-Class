// import PropTypes from "prop-types";
export default function UserGreeting(props) {
  return props.isLoggedIn ? (
    <h1>Welcome {props.username}</h1>
  ) : (
    <h1>Please login bro</h1>
  );
}

// UserGreeting.proptypes = {
//   isLoggedIn: PropTypes.bool,
//   username: PropTypes.string,
// }
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
