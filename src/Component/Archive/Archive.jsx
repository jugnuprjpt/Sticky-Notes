import React from "react";

import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

function Archive() {
  const navigate = useNavigate();
  const trashGet = JSON.parse(localStorage.getItem("data"));

  return (
    <>
      <Header />
      {trashGet.length < 1 && (
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
      )}

      {trashGet.map((item, id) => (
        <div className="p-4" key={id}>
          <div
            className="card w-25 position-relative rounded-5 bg-danger-subtle"
            style={{ bottom: "364px", left: "761px" }}
          >
            <div className="card-body">
              <h4 className="p-2">
                <b>{item.title}</b>
              </h4>
              <span className="fs-5 p-2">{item.descri}</span> <br />
              <span className="fs-5 p-2">Created At :- {item.nDate} </span>
            </div>
            <div className="p-2 modal-footer">
              <i
                className="fa-solid fa-trash fs-5 p-2"
                style={{ cursor: "pointer" }}
                // onClick={() => handleDelete(item)}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Archive;
