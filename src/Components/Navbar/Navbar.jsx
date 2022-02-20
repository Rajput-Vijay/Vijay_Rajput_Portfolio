import React from "react";
import { Toggle } from "./Toggle";
import { NavBarDiv, NavBarRight, NavLink } from "./Styles";
import { Link } from "react-scroll";

const menus = [
  { id: 0, name: "Home", css: "home" },
  { id: 1, name: "About", css: "about" },
  { id: 2, name: "Skills", css: "skills" },
  { id: 3, name: "Projects", css: "projects" },
  { id: 4, name: "Contact", css: "contact" },
];


function Navbar({ themeToggler }) {
  return (
    <NavBarDiv>
      <Toggle themeToggler={themeToggler} />
      <NavBarRight>
        {menus.map((item) => (
          <Link
            key={item.id}
            activeClass="active"
            to={item.css}
            spy={true}
            smooth={true}
            duration={500}
          >
            <NavLink key={item.id}>{item.name}</NavLink>
          </Link>
        ))}
      </NavBarRight>
    </NavBarDiv>
  );
}

export default Navbar;
