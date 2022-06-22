import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
const host = "http://localhost:4000/api/";

const AddStudent = () => {
  const [studentName, setStudentName] = useState("");
  async function addStudent(e) {
    e.preventDefault();
    console.log("add student", studentName);
    console.log(`${host}student/addStudent`);
    await axios
      .post(`${host}student/addStudent`, {
        fullName: studentName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <form onSubmit={addStudent}>
      <input
        type="text"
        placeholder="student"
        onChange={(e) => setStudentName(e.target.value)}
        value={studentName}
      ></input>
      <button type="submit">submit student name</button>
    </form>
  );
};

export default AddStudent;
