import React, { useState } from 'react';
import { Card, Table, Button } from 'react-bootstrap';

const CourseList = ({ courses, schools, selectedSchools }) => {
  const [sortOrder, setSortOrder] = useState('asc'); // asc for ascending, desc for descending

  const filteredCourses = selectedSchools.length > 0 
    ? courses.filter(course => selectedSchools.includes(course.schoolId))
    : courses;

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    
    <Card className="no-border">
      Sort by Name<Button variant="outline-secondary" className="ml-2" onClick={toggleSortOrder}>
           ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </Button>
      
      <Card.Header>
        Courses
        
      </Card.Header>
      <Card.Body>
        <Table striped hover className="no-border">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Credits</th>
              <th>Mandatory</th>
              <th>Teacher</th>
              <th>Duration</th>
              <th>School</th>
            </tr>
          </thead>
          <tbody>
            {sortedCourses.map((course, index) => {
              const school = schools.find(school => school.id === course.schoolId);
              return (
                <tr key={course.id}>
                  <td>{index + 1}</td>
                  <td>{course.name}</td>
                  <td>{course.description}</td>
                  <td>{course.credits}</td>
                  <td>{course.mandatory ? "Yes" : "No"}</td>
                  <td>{course.teacher}</td>
                  <td>{course.duration}</td>
                  <td>{school ? school.name : "Unknown"}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default CourseList;
