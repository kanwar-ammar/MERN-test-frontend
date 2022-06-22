import logo from "./logo.svg";
import Graph from "./components/Graph";
import AddSubject from "./components/AddSubject";
import AddStudent from "./components/AddStudent";
import AddTeacher from "./components/AddTeacher";
import AddScores from "./components/AddScores";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Build React Graphs The Easy Way</h1>
        {/* other graphs */}
        <div className="section">
          <Graph></Graph>
          <div style={{ padding: "20", margin: "50" }}>
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
