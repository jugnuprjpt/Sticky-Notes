import React from "react";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";

function Trash() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div
        className="p-3"
        style={{ bottom: "370px", marginLeft: "800px", position: "relative" }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png"
          alt=""
          width="100px"
          style={{ marginLeft: "140px" }}
        />
        <div className="p-3">
          <span className="fs-3" style={{ marginLeft: "-74px" }}>
            {" "}
            Trash is empty. Wanna Trash any Note ?
          </span>
        </div>
        <div className="p-2" style={{ marginLeft: "120px" }}>
          <button
            type="button"
            className="btn btn-danger rounded-5"
            onClick={() => navigate("/Home")}
          >
            Go to Home
          </button>
        </div>
      </div>
    </>
  );
}

export default Trash;
