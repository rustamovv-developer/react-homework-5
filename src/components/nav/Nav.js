import React, { memo } from "react";
import { Routers } from "../../static/routes";
import logo from "../../assets/images/logo.png";
import { NavLink, Route } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <NavLink to={"/"}>
            <img src={logo} alt="nav_img" className="nav__img" />
          </NavLink>
          <ul className="nav__list">
            {Routers?.map((el) => (
              <NavLink key={el.id} className="nav__link" to={el.path}>
                {el.title}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default memo(Nav);
