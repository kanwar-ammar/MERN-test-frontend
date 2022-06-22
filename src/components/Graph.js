import React, { useState, useEffect, Fragment } from "react";
import { VictoryBar, VictoryChart } from "victory";
import { VictoryPie } from "victory";
import { Chart } from "react-google-charts";
import axios from "axios";
const host = "http://localhost:4000/api/";

const Graph = () => {
  let [students, setStudents] = useState();
  let student = "";
  // useEffect(() => {
  // axios.get(`${host}student/topfive`).then(async function (res) {
  //   student = await res.data.data;
  //   setStudents(student);
  //   console.log(students);
  // });
  // });
  // let dataG = students.map(async (student) => {
  //   console.log(student);
  //   let data = [];
  //   data.push(student.studentId, student.score);
  // });
  // for (student of students) {
  //   data.push(student.studentId, student.score);
  //   console.log(data);
  //   data.push(dataG);
  // }
  // console.log("globalData", await dataG);
  return (
    <Fragment>
      <Chart
        chartType="ScatterChart"
        data={[
          ["student", "Scores"],
          [1, 90],
          [2, 80],
          [3, 70],
          [4, 60],
        ]}
        width="100%"
        height="400px"
        legendToggle
      />
    </Fragment>
  );
};

export default Graph;
