import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null); // Added userData state
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // For redirection after login

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
  
    try {
      const loginResponse = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, expiresInMins: 30 }),
      });
  
      if (!loginResponse.ok) {
        throw new Error('Invalid username or password.');
      }
  
      const loginData = await loginResponse.json();
      const accessToken = loginData.accessToken;
      const refreshToken = loginData.refreshToken;
  
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
  
      const userResponse = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!userResponse.ok) {
        throw new Error('Failed to fetch user');
      }
  
      const userData = await userResponse.json();
      navigate('/', { state: { user: userData } });
      
      // Optionally, display user info on the page
      setUserData(userData);
  
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2 >Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group  controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Login' : 'Login'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
