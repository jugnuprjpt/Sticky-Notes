import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Welcome from "../Welcome/Welcome";

function SideBar() {
  const location = useLocation();
  console.log(location.pathname, "ok....dfg");

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className="col-auto col-md-3 col-xl-2 px-sm-2 px-0"
          style={{
            backgroundColor: "#1987544d",
            // marginBottom: "200px",
            height: "866px",
            width: "200px",
          }}
        >
          <div className=" d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-black">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-4"
              id="menu"
              style={{ marginLeft: "-28px" }}
            >
              <li
                className={`nav-item p-2 ${
                  location.pathname === "/home" ? "sidebar-active-color" : ""
                }`}
              >
                <i className="fa-solid fa-house fs-5 p-2"></i>
                <Link to="/home" className="text-decoration-none">
                  <span className="ms-1 d-none d-sm-inline fs-5 text-success-emphasis fw-bold">
                    Home
                  </span>
                </Link>
              </li>
              <li
                className={`nav-item p-2 ${
                  location.pathname === "/archive" ? "sidebar-active-color" : ""
                }`}
              >
                <i className="fa-solid fa-sitemap fs-5 p-2"></i>
                <Link to="/archive" className="text-decoration-none">
                  <span className="ms-1 d-none d-sm-inline fs-5 text-success-emphasis fw-normal fw-bold">
                    Archive
                  </span>{" "}
                </Link>
              </li>
              <li
                className={`nav-item p-2 ${
                  location.pathname === "/trash" ? "sidebar-active-color" : ""
                }`}
              >
                <i className="fa-solid fa-trash fs-5 p-2"></i>
                <Link to="/trash" className="text-decoration-none">
                  <span className="ms-1 d-none d-sm-inline fs-5 text-success-emphasis fw-bold">
                    Trash
                  </span>
                </Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
