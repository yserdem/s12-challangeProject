import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { Link } from "react-scroll";

export default function Header() {
  const { data } = useContext(AppContext);

  return (
    <div className="container">
      <div className="headerContainer">
        <h1 className="logoCircle">S</h1>
        <div className="nav">
          <Link className="navName" to="skills" smooth={true} duration={500}>
            {data.headerSkills}
          </Link>
          <Link className="navName" to="projects" smooth={true} duration={500}>
            {data.headerProjects}
          </Link>

          <a className="background" href="">
            <p>{data.headerHireMe}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
