import React from "react";
import SideBar from "../SideBar/SideBar/SideBar";

function Header() {
  return (
    <>
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand text-light fs-3" href="./">
            <i className="fa-regular fa-note-sticky text-black p-2"></i>
            <span className="text-primary">S</span>
            <span className="text-secondary">TICKY </span>
            <span className="text-primary">N</span>
            <span className="text-secondary">OTES</span>
          </a>
          <button
            className="navbar-toggler bg-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gfgnavbar"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-primary"></span>
          </button>
          <div className="collapse navbar-collapse" id="gfgnavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="nav-link fs-4 ">GO Back</div>
              </li>
              {/* <li className="nav-item">
                <Link to="/about-us" className="nav-link fs-4">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/project" className="nav-link fs-4">
                  PROJECT
                </Link>
              </li> */}
              <li className="nav-item">
                <div className="nav-link fs-4 text-secondary">Filter</div>
              </li>
              <li className="nav-item">
                <div className="nav-link fs-4 text-secondary">Log Out</div>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <SideBar />
    </>
  );
}

export default Header;
