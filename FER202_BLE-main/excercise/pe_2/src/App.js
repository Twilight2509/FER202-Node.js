import { Container, Row, Col } from 'react-bootstrap';
import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Base from './components/Base';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<StudentList/>} />
          <Route path="students/:id" element={<StudentDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
