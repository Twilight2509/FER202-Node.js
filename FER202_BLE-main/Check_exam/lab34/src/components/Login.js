import React, { useState, useEffect } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login() {
  const [user,setUser] = useState([])
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
    const navigate = useNavigate();

  useEffect(()=>{
    fetch("http://localhost:9999/users")
        .then(response => response.json())
        .then((result)=> setUser(result));
  }, [])


  const LoginFunction = (e)=>{
    e.preventDefault();
    if(!Username || !Password){
        alert("Pls enter all information required")
        return;
    }
    const ExistUser = user?.find(u => u.username == Username && u.password == Password)
    console.log(user);
    
    if(ExistUser){
        localStorage.setItem("account", JSON.stringify(ExistUser));
        alert("Login Successfully")
        navigate('/')
    } else{
        alert("Account have ploblem")
    }
  }
    return (
    <Container>
        <Row style={{alignItems:'center'}}>
            <Form onSubmit={LoginFunction}>
                <Form.Group>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control
                        type='text'
                        style={{width: '300px'}}
                        value={Username}
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='text'
                        style={{width: '300px'}}
                        value={Password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        </Row>
    </Container>
  )
}
