import React, { useState, useEffect, Fragment } from "react";
import { VictoryBar, VictoryChart } from "victory";
import { VictoryPie } from "victory";
import { Chart } from "react-google-charts";
import axios from "axios";
const host = "http://localhost:4000/api/";

const SubjectGraph = () => {
  const data = [
    ["Subject", "Students enrolled"],
    ["Computer", 4],
    ["Science", 6],
    ["social studies", 2],
  ];

  const options = {
    title: "Top 3 subjects",
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

export default SubjectGraph;
