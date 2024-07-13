import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Container, Col, Row, Button, Form } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'

export default function CreateProject() {
  const name = useRef()
  const description = useRef()
  const startDate = useRef()
  const type = useRef()
  const department = useRef()
  const navigate = useNavigate()

  const handleCreate = (event) => {
    event.preventDefault();

    if (name.current.value.trim() === '') {
      alert("Please enter the form fields that are required.");
    } else {
      const newProject = {
        name: name.current.value,
        description: description.current.value,
        startDate: startDate.current.value,
        type: type.current.value,
        department: parseInt(department.current.value, 10), // Chuyển đổi sang số nguyên
      };
      
      axios.post('http://localhost:9999/projects', newProject)
        .then(res => {
          console.log(res.data);
          alert("New project has been added successfully!");
          navigate('/'); // Assuming '/projects' is the route for the project list
        })
        .catch(err => {
          console.log(err);
          alert("Error adding new project. Please try again.");
        });
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 style={{ textAlign: "center" }}>Add a new Project</h1>
        </Col>
      </Row>
      <Link to='/' style={{marginLeft: '15px', marginBottom: '20px'}}>Home page</Link>
      <Form onSubmit={handleCreate}>
        <Form.Group className='mt-3'>
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            ref={name}
            required
          />
        </Form.Group>
        <Form.Group className='mt-3'>
          <Form.Label>Description</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name="description" 
            ref={description}             
          />
        </Form.Group>
        <Form.Group className='mt-3'>
          <Form.Label>Start Date</Form.Label>
          <Form.Control 
            type="date" 
            name="startDate" 
            ref={startDate}
          />
        </Form.Group>
        <Form.Group className='mt-3'>
          <Form.Label>Type</Form.Label>
          <Form.Control 
            type="text" 
            name="type" 
            ref={type}
          />
        </Form.Group>
        <Form.Group className='mt-3'>
          <Form.Label>Department</Form.Label>
          <Form.Control 
            as="select" 
            name="department" 
            ref={department}
          >
            <option value='1'>Integrated System</option>
            <option value='2'>Software</option>
            <option value='3'>Information Assurance</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit" className='mt-3'>Create</Button>
      </Form>
    </Container>
  )
}