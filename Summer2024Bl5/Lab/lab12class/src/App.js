import React from "react";
import { Container, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const information = [
  {
    stt: 1,
    name: "Nguyen Van A",
    birthdate: "01/01/2000",
    teachingQuality: "Good",
    courses: ["Java"],
  },
  {
    stt: 2,
    name: "Nguyen Van B",
    birthdate: "01/01/2000",
    teachingQuality: "Good",
    courses: ["English"],
  },
  {
    stt: 3,
    name: "Nguyen Van C",
    birthdate: "01/01/2000",
    teachingQuality: "Good",
    courses: ["ReactJs"],
  },
];
let teachingQuality = ["Very good", "Good", "Normal", "Bad"];
let infor = ["Java", "English", "ReactJs"];

function App() {
  return (
    <Container>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
      INFORMATION DISCLOSURE
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label>Name:</label>
            <input
              placeholder="input your name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Teaching quality:</label>
            <select className="form-control">
              {teachingQuality.map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>Birthdate:</label>
            <input
              placeholder="input your birthdate"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Courses:</label>
            <div style={{ display: "flex", gap: "10px" }}>
              {infor.map((item, index) => (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    id={`course-${index}`}
                    name={item}
                    value={item}
                  />
                  <label
                    htmlFor={`course-${index}`}
                    style={{ marginLeft: "5px" }}
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Button type="button">Send</Button>

      <h2>List of information:</h2>
      <Table className="table table-danger table-hover">
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
          {information.map((info, index) => (
            <tr className="table-success" key={index}>
              <td>{info.stt}</td>
              <td>{info.name}</td>
              <td>{info.birthdate}</td>
              <td>{info.teachingQuality}</td>
              <td>{info.courses}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
