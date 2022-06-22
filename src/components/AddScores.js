import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
const host = "http://localhost:4000/api/";

const AddScores = () => {
  const [studentName, setStudentName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [score, setScore] = useState("");
  async function addScores(e) {
    e.preventDefault();
    console.log(studentName, teacherName, subjectName, score);
    console.log(`${host}scores/postScore`);
    await axios
      .post(`${host}scores/postScore`, {
        studentName: studentName,
        teacherName: teacherName,
        subjectName: subjectName,
        score: score,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <form onSubmit={addScores}>
      <input
        type="text"
        placeholder="student"
        onChange={(e) => setStudentName(e.target.value)}
        value={studentName}
      ></input>
      <input
        type="text"
        placeholder="teacher"
        value={teacherName}
        onChange={(e) => setTeacherName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="subject Name"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
      ></input>
      <input
        type="number"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        placeholder="score"
      ></input>
      <button type="submit">submit scores</button>
    </form>
  );
};

export default AddScores;
