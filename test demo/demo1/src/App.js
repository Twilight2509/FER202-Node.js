import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import CreateProject from "./components/CreateProject";
import EmployeeList from "./components/EmployeeList";


function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Project />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;