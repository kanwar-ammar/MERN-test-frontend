import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Science", "Computer", "Social Studies", "Urdu", "Geograpghy"],
  ["22/06", 6, 1, 2, 4],
  ["23/07", 4, 3, 1, 2],
];

export const options = {
  title: "Students enrolling in days",
  vAxis: { title: "Students" },
  hAxis: { title: "days" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
};
const TotalStudentGraph = () => {
  return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default TotalStudentGraph;
