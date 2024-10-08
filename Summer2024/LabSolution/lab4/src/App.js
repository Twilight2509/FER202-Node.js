
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import EmployeeProvider from './context/EmployeeContext';
import DepartmentList from './components/DepartmentList';
import EmployeeList from './components/EmployeeList';
import AddEmployeeForm from './components/AddEmployeeForm';
import Search from './components/Search';
import AppNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EmployeeDetail from './components/EmployeeDetail';
import EditEmployeeForm from './components/EditEmployeeForm';
import DepartmentList_Radio from './others/DepartmentList_Radio';
import Navbar_Button from './others/Navbar_Button';

const App = () => {
  return (
    <EmployeeProvider>
      <Router>
        <Navbar_Button/>
        <Container className="mt-4">
          <Routes>
            <Route path="/" element=
              {
                <Row>
                  <Col md={4}>
                    <h2>Departments</h2>
                    <DepartmentList/>
                  </Col>
                  <Col md={8}>
                    <h2>Employees</h2>
                    <Search />
                    <EmployeeList />
                  </Col>
                </Row>
              }
            />
            <Route path="/add" element={<AddEmployeeForm />} />
            <Route path="/employee/:id" element={<EmployeeDetail />} />
            <Route path="/edit/:id" element={<EditEmployeeForm />} />
          </Routes>
        </Container>
      </Router>
    </EmployeeProvider>
  );
};

export default App;
