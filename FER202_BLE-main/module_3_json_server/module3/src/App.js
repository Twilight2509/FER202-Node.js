import { BrowserRouter  as Router, Route, Routes } from "react-router-dom";
import Job from "./components/job";
import JobDetail from "./components/jobDetail";
import AddJob from "./components/AddJob";
import Login from "./components/Login";

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Job />} /> 
        <Route path="/jobs" element={<Job />} /> 
        <Route path='/jobs/:id' element={<JobDetail />} /> 
        <Route path='/addjob' element={<AddJob />} /> 
      </Routes>
    </Router>
  );  
}

export default App;
