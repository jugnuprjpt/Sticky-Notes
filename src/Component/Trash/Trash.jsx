import React, { useState } from "react";
// import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

function Trash() {
  const navigate = useNavigate();
  const trashGet = JSON.parse(localStorage.getItem("data"));
  const [trashdelete, setTrashDelete] = useState(trashGet);

  const handleDelete = (data) => {
    const deleteData = trashdelete.filter((remove) => data !== remove);
    localStorage.setItem("data", JSON.stringify(deleteData));
    setTrashDelete(deleteData);
  };
  return (
    <>
      {/* <Header /> */}
      {trashdelete.length < 1 && (
        <div
          className="p-3"
          style={{ bottom: "500px", marginLeft: "800px", position: "absolute" }}
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
      )}
      {trashdelete.map((item, id) => (
        <div className="p-4" key={id}>
          <div
            className="card w-25 position-relative rounded-5 bg-danger-subtle"
            style={{ bottom: "364px", left: "761px" }}
          >
            <div className="card-body">
              <h4 className="p-2">
                <b>{item.title}</b>
              </h4>
              <span className="fs-5 p-2">{item.descri} </span> <br />
              <span className="fs-5 p-2">Created At :- {item.nDate} </span>
            </div>
            <div className="p-2 modal-footer">
              <i
                className="fa-solid fa-trash fs-5 p-2"
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(item)}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Trash;
