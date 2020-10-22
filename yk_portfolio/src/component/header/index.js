import React from "react";
// import { Card, Button } from "react-bootstrap";

function BasicCard({Image, CardTitle, HREF, HREF2, buttonText2, buttonText1}) {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <a className="nav-link text-info" href="/"
                >About <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="/portfolio">Portfolio</a>
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