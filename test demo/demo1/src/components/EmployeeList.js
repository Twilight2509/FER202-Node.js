import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Button, Form, Table } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

export default function EmployeeList() {
    const {departmentId} = useParams()
    const [employees, setEmployees] = useState([])
    const [departmentName, setDepartmentName] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:9999/employees?department=${departmentId}`)
        .then(res => setEmployees(res.data))
        .catch(err => console.log(err))

        axios.get(`http://localhost:9999/departments/${departmentId}`)
        .then(res => setDepartmentName(res.data.name))

    },[departmentId])

    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h1 style={{ textAlign: "center" }}>List of Employees</h1>
                </Col>
            </Row>
            <a href='/'>Home page</a>
            <h2>{departmentName}</h2>
            <Table hover striped bordered>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Date of birth</th>
                        <th>Gender</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(e => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.dob}</td>
                            <td>{e.gender}</td>
                            <td>{e.position}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}
