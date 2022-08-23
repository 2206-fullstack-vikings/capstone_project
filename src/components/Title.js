import React from "react";
import { Link } from "react-router-dom";
import "../style/Title.css";

const Title = () => {
  return (
    <header className="header_container">
      <div className="title_container">
        <div className="logoHeadline">
          <img id="logo" />
          <div className="titleDiv">
            <h1 className="siteTitle">TRUTHY JERSEYZ OUTLET</h1>
          </div>
        </div>
      </div>
      <div className="link_bar">
        <Link className="links" to="/">
          HOME
        </Link>
        <Link className="links" to="/admin">
          ADMIN
        </Link>
        <Link className="links" to="/login">
          LOGIN/REGISTER
        </Link>
        <Link className="links" to="/orderform">
          CART
        </Link>
      </div>
    </header>
  );
};

export default Title;
