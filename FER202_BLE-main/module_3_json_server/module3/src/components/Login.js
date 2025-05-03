import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login(){
    const [user, setUser] = useState([])
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("http://localhost:9999/users")
            .then(response => setUser(response.data))
    }, [])

    const LoginFunction = (e) =>{
        e.preventDefault();
        if(!username || !password){
            alert("Pls enter the require")
            return;
        }
        const ExistUser = user?.find(u => u.user == username && u.pass == password)
        if(ExistUser){
            localStorage.setItem("account", JSON.stringify(ExistUser));
            alert("Login Successfully")
            navigate('/jobs')
        } else{
            alert("Account have ploblem")
        }

    }
    return(
        <div>
            <Form onSubmit={LoginFunction}>
                <Form.Group>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control
                        type="text"
                        style={{width:'300px'}}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        style={{width:'300px'}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Login