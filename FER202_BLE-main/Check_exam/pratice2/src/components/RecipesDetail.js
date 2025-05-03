import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Nav, Row, Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export default function RecipesDetail() {
    const { id } = useParams();
    const [recipesDetail, setRecipesDetail] = useState([]);
    const [activeTab, setActiveTab] = useState('ingredients');
    const [newRating, setNewRating] = useState(null); 

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Fetch Error');
                }
                return response.json();
            })
            .then(result => {
                setRecipesDetail(Array.isArray(result) ? result : [result]);
            })
            .catch(err => console.error('Error', err));
    }, [id]);

    const handleSelect = (selectedTab) => {
        setActiveTab(selectedTab);
    };

    const handleSaveRating = (rating) => {
        alert('Not Saving')
    };


    return (
        <Container>
            <Row>
                <Col>
                    <Link to={'/'}>
                        <Button>Home</Button>
                    </Link>
                    {recipesDetail?.map((rec) => (
                        <Card style={{ width: 'auto', height: 'auto' }} key={rec.id}>
                            <h2>Recipe details</h2>
                            <Card.Img variant="right" src={rec.image} style={{ width: '300px', height: '300px' }} />
                            <Card.Body>
                                <Card.Text>Id: {rec.id}</Card.Text>
                                <Card.Text>Name: {rec.name}</Card.Text>
                                <Card.Text>Rating: {rec.rating}</Card.Text>
                                <Card.Header>
                                    <Nav variant="tabs" activeKey={activeTab} onSelect={handleSelect}>
                                        <Nav.Item>
                                            <Nav.Link eventKey="ingredients">Ingredients</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="instructions">Instructions</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="rating">Rating</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Header>
                                {activeTab === 'ingredients' ? (
                                    <Card.Body>
                                        <h5>Ingredients</h5>
                                        <p>{rec.ingredients.join('\n')}</p>
                                    </Card.Body>
                                ) : activeTab === 'instructions' ? (
                                    <Card.Body>
                                        <h5>Instructions</h5>
                                        <p>{rec.instructions.join('\n')}</p>
                                    </Card.Body>
                                ) : activeTab === 'rating' ? (
                                    <Card.Body>
                                        <h5>Rating</h5>
                                        <div>
                                            {/* Hiển thị các lựa chọn điểm đánh giá */}
                                            <Form.Group>
                                                <Form.Label>Select rating:</Form.Label>
                                                {[5, 4, 3, 2, 1].map((value) => (
                                                    <Button
                                                        key={value}
                                                        variant={newRating === value ? 'primary' : 'secondary'}
                                                        style={{ margin: '5px' }}
                                                    >
                                                        {value}
                                                    </Button>
                                                ))}
                                            </Form.Group>
                                        </div>
                                        <Button onClick={handleSaveRating}>Save Rating</Button>
                                    </Card.Body>
                                ) : null}
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
