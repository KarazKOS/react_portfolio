import React from "react";
import { Link } from "react-router-dom";
// import { Card, Button } from "react-bootstrap";

function BasicCard({Image, CardTitle, HREF, HREF2, buttonText2, buttonText1}) {
    return (
      <div className="border-low main-nav">
      <nav className="btn navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand hover" to="/">
          <h3>YULIN KARAISCOS</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-info1" href="/"
                >About <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item text-sm">
              <a className="nav-link text-info text-sm" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="/contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>

    )
}
export default BasicCard;