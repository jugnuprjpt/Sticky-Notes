import React, { useState } from "react";
import Header from "../../Header/Header";

function Home() {
  const [title, setTitle] = useState("");
  const [descri, setDescri] = useState("");
  const [listData, setListData] = useState([]);
  const [show, SetShow] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const addDetail = (e) => {
    e.preventDefault();
    setListData((prev) => [...prev, { title, descri, nDate }]);
    setTitle("");
    setDescri("");
    const nDate = new Date().toLocaleString();
  };

  const handleDelete = (data) => {
    const deleteData = listData.filter((remove) => data !== remove);
    setListData(deleteData);
  };

  const handleUpdate = (i) => {
    console.log(listData, "fgf");
    setTitle(listData[i].title);
    setDescri(listData[i].descri);
    SetShow(true);
    setEditIndex(i);
  };

  // -------------Edit Data ----------

  const handleEdit = () => {
    listData.splice(editIndex, 1);
    SetShow(false);
  };

  const handleMove = (index) => {
    const newUser = [...listData];
    newUser[index].title = "";
    newUser[index].descri = "";
    newUser[index].nDate = "";
    setListData(newUser);
  };

  return (
    <>
      <Header />

      {/* ---------- Home Main Contain start ----------  */}
      {listData.length < 1 && (
        <div
          className="p-3"
          style={{ bottom: "370px", marginLeft: "800px", position: "relative" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2599/2599636.png"
            alt=""
            width="100px"
            style={{ marginLeft: "130px" }}
          />
          <div className="p-2">
            <span className="fs-3 p-2" style={{ marginLeft: "-32px" }}>
              {" "}
              No notes yet, Start creating Now
            </span>
          </div>
          <div className="p-3" style={{ marginLeft: "120px" }}>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-danger rounded-5"
            >
              Add Now
            </button>
          </div>
        </div>
      )}

      {/* ---------- Home Main Contain End ----------  */}

      {/* ------------- Modal -- start -------------- */}

      <div
        className="modal p-5"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter Your notes Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={addDetail}>
                <div className="form-group">
                  <label className="p-2 fs-5">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label className="p-2 fs-5">Description</label>
                  <br />
                  <textarea
                    name=""
                    className="form-control"
                    placeholder="Enter your Description"
                    cols="48"
                    rows="4"
                    value={descri}
                    onChange={(e) => setDescri(e.target.value)}
                  ></textarea>
                  <div className="modal-footer">
                    {!show ? (
                      <button
                        data-bs-dismiss="modal"
                        data-bs-target="#exampleModal"
                        className="btn btn-danger rounded-5"
                      >
                        Add Now
                      </button>
                    ) : (
                      <button
                        data-bs-dismiss="modal"
                        data-bs-target="#exampleModal"
                        className="btn btn-danger rounded-5"
                        onClick={handleEdit}
                      >
                        Update
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ------------- Modal -- End -------------- */}

      {/* --------------  Contain List ---------------  */}

      {listData.map((item, id) => (
        <>
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
                  className="fa-solid fa-pen-to-square fs-5 p-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleUpdate(id)}
                ></i>
                <i
                  className="fa-solid fa-file-zipper fs-5 p-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMove(id)}
                ></i>
                <i
                  className="fa-solid fa-trash fs-5 p-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(item)}
                ></i>
              </div>
            </div>
          </div>
        </>
      ))}

      {listData.length >= 1 && (
        <div
          className="p-3"
          style={{ marginLeft: "120px", position: "sticky" }}
        >
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-danger rounded-5"
          >
            Add Now
          </button>
        </div>
      )}
    </>
  );
}

export default Home;
