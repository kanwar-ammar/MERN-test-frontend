import React, { useState, useEffect, Fragment } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
const host = "http://localhost:4000/api/";

const Graph = () => {
  let [students, setStudents] = useState("");
  let [studentName, setStudentName] = useState("");
  let student = "";
  useEffect(() => {
    console.log(`${host}student/topfive`);
    axios.get(`${host}student/topfive`).then(async function (res) {
      student = await res.data.data;
      setStudents(student);
    });
  }, []);
  console.log(students);
  let allStudents = [["student", "Scores"]];
  for (student of students) {
    let data = [];
    let studentId = student.studentId;
    // axios
    //   .get(`${host}student/getStudent/${studentId}`)
    //   .then(async function (res) {
    //     let StudentName = res.data.data;
    //     console.log("curr student name", res.data.data);
    //     setStudentName(StudentName);
    //     data.push(studentName, student.score);
    //   });
    // console.log(studentName);
    data.push(student.studentId, student.score);
    allStudents.push(data);
  }
  console.log(allStudents);
  return (
    // <p>Hello</p>
    <Fragment>
      <Chart
        chartType="ScatterChart"
        data={allStudents}
        width="100%"
        height="400px"
        legendToggle
      />
    </Fragment>
  );
};

export default Graph;
