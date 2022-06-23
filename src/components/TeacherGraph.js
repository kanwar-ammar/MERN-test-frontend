import React, { useState, useEffect, Fragment } from "react";
import { VictoryBar, VictoryChart } from "victory";
import { VictoryPie } from "victory";
import { Chart } from "react-google-charts";
import axios from "axios";
const host = "http://localhost:4000/api/";

const TeacherGraph = () => {
  const data = [
    ["Teachers", "Students studying"],
    ["Ammar", 3],
    ["Kanwar Ammar", 2],
    ["Ammar Ali", 1],
  ];

  const options = {
    title: "Top 3 Teacher",
  };
  return (
    <Fragment>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </Fragment>
  );
};

export default TeacherGraph;
