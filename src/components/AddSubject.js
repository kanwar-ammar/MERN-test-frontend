import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
const host = "http://localhost:4000/api/";

const AddSubject = () => {
  const [subjectName, setSubjectName] = useState("");
  async function addSubject(e) {
    e.preventDefault();
    console.log(subjectName);
    await axios
      .post(`${host}subjects/addSubject`, {
        name: subjectName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async function deleteSubject(subjectName) {
    await axios
      .delete(`${host}subjects/deleteSubject/${subjectName}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div style={{ display: "inline" }}>
      <form onSubmit={addSubject}>
        <input
          type="text"
          placeholder="subject Name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        ></input>
        <button type="submit">submit subject name</button>
      </form>
      <button onClick={() => deleteSubject(subjectName)}>delete</button>
    </div>
  );
};

export default AddSubject;
