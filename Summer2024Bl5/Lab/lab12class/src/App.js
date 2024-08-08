import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';

function App() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [teachingQuality, setTeachingQuality] = useState('Very good');
  const [courses, setCourses] = useState([]);
  const [information, setInformation] = useState([]);

  const handleCourseChange = (event) => {
    const value = event.target.value;
    setCourses((prevCourses) =>
      prevCourses.includes(value)
        ? prevCourses.filter((course) => course !== value)
        : [...prevCourses, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInformation([...information, { name, birthdate, teachingQuality, courses }]);
  };

  return (
    <Container>
      <h1>Lab 1,2</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Birthdate:</Form.Label>
          <Form.Control type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Teaching quality:</Form.Label>
          <Form.Control as="select" value={teachingQuality} onChange={(e) => setTeachingQuality(e.target.value)}>
            <option>Very good</option>
            <option>Good</option>
            <option>Normal</option>
            <option>Bad</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Courses:</Form.Label>
          <Form.Check type="checkbox" label="Java" value="Java" onChange={handleCourseChange} />
          <Form.Check type="checkbox" label="English" value="English" onChange={handleCourseChange} />
          <Form.Check type="checkbox" label="ReactJs" value="ReactJs" onChange={handleCourseChange} />
        </Form.Group>
        <Button type="submit">Send</Button>
      </Form>

      <h2>List of information:</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Birthdate</th>
            <th>Teaching quality</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {information.map((info, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{info.name}</td>
              <td>{info.birthdate}</td>
              <td>{info.teachingQuality}</td>
              <td>{info.courses.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
