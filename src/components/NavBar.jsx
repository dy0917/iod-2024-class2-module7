import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../context/themeContext";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);
  console.log(theme);
  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dash">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Post</NavLink>
        </li>
      </ul>{" "}
      {/* ++ Add another page with route and component */}
    </nav>
  );
}
