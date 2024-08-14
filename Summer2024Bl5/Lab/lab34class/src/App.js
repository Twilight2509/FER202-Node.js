import React, { useState } from "react";
import { Container, Button, Table, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import teachingQualities from "./components/Qualities";
import coursesData from "./components/Courses";
import initialInformationData from "./components/Data";
import Form from "react-bootstrap/Form";

function App() {
  const [teachingQuality] = useState(teachingQualities);
  const [courses] = useState(coursesData);
  const [information, setInformation] = useState(initialInformationData);
  const [filteredInformation, setFilteredInformation] = useState(
    initialInformationData
  );
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    qualities: teachingQualities[0],
    courses: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    const selectedCourse = courses.find((course) => course.name === value);
    const updatedCourses = checked
      ? [...formData.courses, selectedCourse]
      : formData.courses.filter((course) => course.name !== value);
    setFormData({ ...formData, courses: updatedCourses });
  };

  const handleAdd = () => {
    const newEntry = { ...formData, id: information.length + 1 };
    setInformation([...information, newEntry]);
    setFilteredInformation([...filteredInformation, newEntry]);
    setFormData({
      name: "",
      dob: "",
      qualities: teachingQualities[0],
      courses: [],
    });
  };

  const handleSearch = () => {
    const dobSearchTerm = formData.dob.toLowerCase().trim();
    const qualitySearchTerm = formData.qualities.toLowerCase().trim();
  
    const results = information.filter((info) => {
      const dobMatch = info.dob.toLowerCase().includes(dobSearchTerm);
      const qualityMatch = info.qualities.toLowerCase() === qualitySearchTerm;
  
      return dobMatch && qualityMatch;
    });
  
    setFilteredInformation(results);
  };

  const handleRowClick = (info) => {
    setFormData({
      name: info.name,
      dob: info.dob,
      qualities: info.qualities,
      courses: info.courses,
    });
  };

  return (
    <Container>
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        INFORMATION DISCLOSURE
      </div>

      <Row>
        <Col md={6}>
          <Form.Group>
            <label>Name:</label>
            <input
              placeholder="input your name"
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <label>Teaching quality:</label>
            <Form.Select
              className="form-control"
              name="qualities"
              value={formData.qualities}
              onChange={handleInputChange}
            >
              {teachingQuality.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <label>Birthdate:</label>
            <input
              placeholder="input your birthdate"
              type="text"
              className="form-control"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <label>Courses:</label>
            <div>
              {courses.map((course, index) => (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Form.Check
                    id={`course-${index}`}
                    name="courses"
                    value={course.name}
                    checked={formData.courses.some(
                      (selectedCourse) => selectedCourse.name === course.name
                    )}
                    onChange={handleCourseChange}
                  />
                  <label
                    htmlFor={`course-${index}`}
                    style={{ marginLeft: "5px" }}
                  >
                    {course.name}
                  </label>
                </div>
              ))}
            </div>
          </Form.Group>
        </Col>
      </Row>

      <div style={{ display: "flex", gap: "10px" }}>
        <Button variant="outline-primary" onClick={handleAdd}>
          ADD
        </Button>
        <Button variant="outline-primary" onClick={handleSearch}>
          SEARCH
        </Button>
      </div>

      <h2>List of information:</h2>
      <Table hover variant="danger">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Birthdate</th>
            <th>Teaching quality</th>
            <th>Courses</th>
          </tr>
        </thead>
        <tbody>
          {filteredInformation.map((info, index) => (
            <tr
              className="table-success"
              key={index}
              onClick={() => handleRowClick(info)}
            >
              <td>{index + 1}</td>
              <td>{info.name}</td>
              <td>{info.dob}</td>
              <td>{info.qualities}</td>
              <td>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {info.courses.map((course, index) => (
                    <div key={index}>{course.name}</div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
