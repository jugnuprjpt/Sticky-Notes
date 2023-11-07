import React from "react";
import image from "../../Image/Notes.png";
import download from "../../Image/downloadd.png";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div style={{ position: "relative", top: "250px", marginLeft: "325px" }}>
        <img src={download} style={{ width: "175px" }} alt="" />
        <h1 className="fs-1 fw-bold">Sticky Note</h1>
        <p className="fs-4">
          Take and manage notes just for you in a modern way.
        </p>
        <Link to="/Home">
          <button type="button" class="btn btn-outline-danger">
            Get Started
          </button>
        </Link>
      </div>
      <div
        style={{
          position: "absolute",
          marginLeft: "1100px",
          marginBottom: "200px",
          top: "200px",
        }}
      >
        <img src={image} alt="image" width="400px" />
      </div>
    </>
  );
}

export default LandingPage;
