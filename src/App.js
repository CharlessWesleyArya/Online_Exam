import Teacher from "./Components/Teacher/Teacher";
import Student from "./Components/student/Student";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddMCQ from "./Components/Teacher/AddMCQ";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/student" exact element={<Student />} />
          <Route path="/teacher" exact element={<Teacher />} />
          <Route path="/teacher/addmcq" exact element={<AddMCQ />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
