import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Table, Button} from 'react-bootstrap'
import { Link, useOutletContext  } from 'react-router-dom';

export default function StudentList() {
    const { students, searchTerm } = useOutletContext();
    const [studentsDetail, setStudentsDetail] = useState([])

        useEffect(()=>{
            fetch('http://localhost:9999/student_details')
                .then(response => response.json())
                .then(result=> setStudentsDetail(result))
        }, [])
    
        const filteredStudents = students?.filter((student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
  return (
    <Container>
        <Row>
            <Col>
            <h2>List Student</h2>
                <Table hover bordered>
                    <thead>
                        <tr>
                            <th>StudentId</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>isRegularStudent</th>
                            <th>View Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents?.map((student)=>(
                            <tr key={student.id}>
                                <td>{student.studentId}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>
                                    {
                                        studentsDetail?.find(sd => sd.id==student.id)?.address?.street
                                    }
                                </td>
                                <td>
                                    {
                                        studentsDetail?.find(sd=> sd.id == student.id)?.address?.city
                                    }
                                </td>
                                <td>
                                    {student.isRegularStudent === true ? <span>Fulltime</span>: <span>Applicant</span>}
                                </td>
                                <td>
                                    <Link to={`/students/${student.id}`} >Grades</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
  )
}
