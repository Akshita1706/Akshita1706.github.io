import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer1">
      <footer className="navbar fixed-bottom  navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " href="#">
                  {" "}
                  © 2022 Copyright:TheSparksBank
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
