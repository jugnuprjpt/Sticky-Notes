import React from "react";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";

function Archive() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div
        className="p-3"
        style={{ bottom: "370px", marginLeft: "800px", position: "relative" }}
      >
        <img
          src="https://cdn.icon-icons.com/icons2/3476/PNG/512/archive_document_cloud_data_folder_backup_website_browser_ui_icon_219918.png"
          alt=""
          width="100px"
          style={{ marginLeft: "140px" }}
        />
        <div className="p-2">
          <span className="fs-3 p-2" style={{ marginLeft: "-56px" }}>
            {" "}
            No notes archived yet, Wanna Archive ?
          </span>
        </div>
        <div className="p-3" style={{ marginLeft: "122px" }}>
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

export default Archive;
