import logo from "./logo.svg";
import Graph from "./components/Graph";
import AddSubject from "./components/AddSubject";
import AddStudent from "./components/AddStudent";
import AddTeacher from "./components/AddTeacher";
import AddScores from "./components/AddScores";
import SubjectGraph from "./components/SubjectGraph";
import TeacherGraph from "./components/TeacherGraph";
import TotalStudentGraph from "./components/TotalStudents";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* other graphs */}
        <div className="section">
          <h1>Top five students</h1>
          <Graph></Graph>
          <div style={{ padding: "20", margin: "50" }}>
            <h1>Subjects with most students</h1>
            <SubjectGraph></SubjectGraph>
            <h1>Teachers with most students</h1>
            <TeacherGraph></TeacherGraph>
            <h1>All students in a day</h1>
            <TotalStudentGraph></TotalStudentGraph>
            <AddStudent></AddStudent>
            <AddTeacher></AddTeacher>
            <AddSubject></AddSubject>
            <AddScores></AddScores>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
