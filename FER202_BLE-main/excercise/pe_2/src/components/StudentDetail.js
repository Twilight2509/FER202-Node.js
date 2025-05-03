import React, {useEffect, useState} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import {Col, Container, Row, Card, Button, Table, Form} from 'react-bootstrap'

export default function StudentDetail() {
    const {id} = useParams();
    const [studentsDetail, setStudentsDetail] = useState([])
    const [evaluations, setEvaluations] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:9999/students/${id}`)
            .then(response => response.json())
            .then(result => setStudentsDetail(Array.isArray(result) ? result : [result]))
                
    }, [id]);
    
    useEffect(()=>{
            fetch('http://localhost:9999/evaluations')
                .then(response => response.json())
                .then(result=> setEvaluations(result))
        }, [])

    console.log(studentsDetail);
    
  return (
    <Container>
        <Row>
            <Col className='mt-5'>
                <Button href='/' variant='success'>Back to Home</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                {studentsDetail?.map((sd) =>(
                    <h3>{sd.name} Grade Details</h3>
                ))}
            </Col>
        </Row>
        <Row>
            <h4>Enter New Grade</h4>
            <Col md={5}>
                <Form.Control
                    type='text'
                    placeholder='Enter grade'
                />
            </Col>
            <Col md={5}>
                <Form.Control
                    type='text'
                    placeholder='Enter Additional Explasation'
                />
            </Col>
            <Col>
                <Button>Add New</Button>
            </Col>
        </Row>
        <Row>
        <Table hover bordered>
                    <thead>
                        <tr>
                            <th>Grade</th>
                            <th>Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {evaluations
                            .filter(e => e.studentId === studentsDetail.studentId)
                            .map((evaluation, index) => (
                                <tr key={index}>
                                    <td>{evaluation.grade}</td>
                                    <td>{evaluation.additionalExplanation}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
        </Row>
    </Container>
  )
}
