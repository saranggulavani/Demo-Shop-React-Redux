import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <NavLink className="ui black header" exact to="/">DEMO SHOP</NavLink>
      </div>
    </div>
  );
};

export default Header;
