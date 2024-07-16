import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SchoolList from './components/SchoolList';
import CourseList from './components/CourseList';
import './App.css'; // Make sure this is imported at the top of the file


const App = () => {
  const [schools, setSchools] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedSchools, setSelectedSchools] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const schoolResponse = await fetch('http://localhost:9999/school');
      const courseResponse = await fetch('http://localhost:9999/course');
      const schoolData = await schoolResponse.json();
      const courseData = await courseResponse.json();
      setSchools(schoolData);
      setCourses(courseData);
    };
    fetchData();
  }, []);

  const toggleSchoolSelection = (schoolId) => {
    setSelectedSchools((prevSelectedSchools) => 
      prevSelectedSchools.includes(schoolId)
        ? prevSelectedSchools.filter(id => id !== schoolId)
        : [...prevSelectedSchools, schoolId]
    );
  };

  return (
    <Container>
      <Row>
        <Col md={7}>
          <CourseList
            courses={courses}
            schools={schools}
            selectedSchools={selectedSchools}
          />
        </Col>
        <Col md={5}>
          <SchoolList
            schools={schools}
            selectedSchools={selectedSchools}
            toggleSchoolSelection={toggleSchoolSelection}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
