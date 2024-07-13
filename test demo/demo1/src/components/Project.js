import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Project() {
    const [projects, setProjects] = useState([])
    const [department, setDepartments] = useState([])
    const [selectedDepartments, setSelectedDepartments] = useState(['All']);
    const [updateMessage, setUpdateMessage] = useState('')

    useEffect(() => {
        axios.get("http://localhost:9999/departments")
            .then(res => setDepartments(res.data))
            .catch(err => console.log(err))

        axios.get("http://localhost:9999/projects")    
            .then(res => setProjects(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleDepartmentChange = (event) => {
        setSelectedDepartments([event.target.value])
    }

    const filteredProject = projects.filter(p => {
        if (selectedDepartments.length === 0 || selectedDepartments.includes('All')) {
            return true
        }
        return selectedDepartments.includes(p.department.toString())
    })

    const getDepartment = (id) => {
        return department?.find(d => d.id === id)
    }

    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h1 style={{ textAlign: "center" }}>List of Project</h1>
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col md={3}>
                    <h4>Departments</h4>
                    <Form.Group>
                        <Form.Check
                            type='radio'
                            label="All"
                            value='All'
                            checked={selectedDepartments.length === 1 && selectedDepartments.includes('All')}
                            onChange={handleDepartmentChange}
                        />
                        {department.map(d => (
                            <Form.Check
                                type='radio'
                                key={d.id}
                                label={d.name}
                                value={d.id.toString()}
                                checked={selectedDepartments.length === 1 && selectedDepartments.includes(d.id.toString())}
                                onChange={handleDepartmentChange}
                            />
                        ))}
                    </Form.Group>
                </Col>
                <Col >
                <Link to={`/projects/add`}><Button variant='success' style={{ marginBottom: '10px' }}>Create new Project</Button></Link>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>Type</th>
                                <th>Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProject.map(p => (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.description}</td>
                                    <td>{p.startDate}</td>
                                    <td>{p.type}</td>
                                    <td>
                                        <Link to={`/departments/${p.department}/employees`}>
                                            {getDepartment(p.department)?.name}
                                        </Link>
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
