import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
const host = "http://localhost:4000/api/";

const AddTeacher = () => {
  const [teacherName, setTeacherName] = useState("");
  async function addTeacher(e) {
    e.preventDefault();
    console.log(teacherName);
    await axios
      .post(`${host}teacher/addTeacher`, {
        fullName: teacherName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form onSubmit={addTeacher}>
      <input
        type="text"
        placeholder="teacher"
        value={teacherName}
        onChange={(e) => setTeacherName(e.target.value)}
      ></input>
      <button type="submit">submit teacher name</button>
    </form>
  );
};

export default AddTeacher;
