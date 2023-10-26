import React, { useState } from "react";

function AddNewMentor() {
  const [name, setName] = useState("");
  const [employeeNo, setEmployeeNo] = useState("");
  const addMentorhandle = async () => {
    const payload = {
      name,
      employeeNo,
    };
    const response = await fetch(`https://guvi-task-v8wa.onrender.com/mentor`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    if (data.message) {
      alert(data.message);
      setName("");
      setEmployeeNo("");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-danger text-center">
        <u>Add Mentor form</u>
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
          <label htmlFor="employeenumber" className="form-label">
            Employee Number:
          </label>
          <input
            type="text"
            className="form-control"
            id="employeenumber"
            value={employeeNo}
            onChange={(e) => setEmployeeNo(e.target.value)}
          />
        </div>

        <button type="button" className="btn btn-outline-primary btn-sm px-5" onClick={addMentorhandle}>
          Add New Mentor
        </button>
      </form>
    </div>
  );
}

export default AddNewMentor;
