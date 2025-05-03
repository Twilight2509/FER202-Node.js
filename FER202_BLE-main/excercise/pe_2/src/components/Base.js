import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Form} from 'react-bootstrap'
import {Link, Outlet } from 'react-router-dom'
import StudentList from './StudentList'
import StudentDetail from './StudentDetail'

export default function Base() {
    const [students, setStudents] = useState([])
    const [subjects, setSubjects] = useState([])
    const [searchTerm, setSearchTerm] = useState(''); // State cho từ khóa tìm kiếm

    useEffect(()=>{
        fetch('http://localhost:9999/students')
            .then(response => response.json())
            .then(result=> setStudents(result))
    }, [])

    useEffect(()=>{
        fetch('http://localhost:9999/subjects')
            .then(response => response.json())
            .then(result=> setSubjects(result))
    }, [])
  return (
    <Container>
        <Row>
            <Col style={{ justifyItems:'center'}}>
                <h1>Students Management</h1>
                    <Form.Control
                        style={{maxWidth:'1100px'}}
                        placeholder='Enter tag to search...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
            </Col>
        </Row>
        <Row>
            <Col md={3}>
                <h1>Subject</h1>
                <ul>
                    {subjects?.map((subject, index) => (
                        <li key={subject.id}>
                        <a href="#" style={{ textDecoration: 'underline', color: 'blue' }}>
                            {Array.isArray(subject.name) ? subject.name.join('\n') : subject.name}
                        </a>
                        </li>
                    ))}
                </ul>
            </Col>
            <Col md={9}>
                <Outlet context={{students, searchTerm}}/>
            </Col>
        </Row>
    </Container>
  )
}
