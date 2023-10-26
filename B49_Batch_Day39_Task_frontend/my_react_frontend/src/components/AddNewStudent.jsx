import React, { useEffect, useState } from "react";

function AddNewStudent() {

  const [name, setName] = useState("");
  const [rollnumber, setRollnumber] = useState("");
  const [msg, setMsg] = useState("");

  const addStudenthandle = async () => {
    console.log("siva");
    const payload = {
      name,
      rollnumber,
    };
    const response = await fetch(`https://guvi-task-v8wa.onrender.com/student`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    if (data.message){
        alert(data.message);
        setName("");
        setRollnumber("");
    }
  };
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-danger text-center">
        <u>Add Student form</u>
      </h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rollnumber" className="form-label">
            Roll Number:
          </label>
          <input
            type="text"
            className="form-control"
            id="rollnumber"
            value={rollnumber}
            onChange={(e) => setRollnumber(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-outline-primary btn-sm px-5"
          onClick={addStudenthandle}
        >
          Add New Student
        </button>
      </form>
    </div>
  );
}

export default AddNewStudent;
