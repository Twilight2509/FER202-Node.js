import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import CreateProject from "./components/CreateProject";
import EmployeeList from "./components/EmployeeList";


function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Project />}/>
                <Route path="/projects/add" element={< CreateProject />}/>
                <Route path="/departments/:departmentId/employees" element={< EmployeeList />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;