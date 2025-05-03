import React, { useEffect, useState } from "react";
import { Table, Form, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

function JobDetail(){
    const {id} = useParams();
    const [jobDetail, setJobDetail] = useState(null)    
    const [issues, setIssues] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:9999/jobs/${id}`)
            .then(response => {
                if(!response.ok){
                    throw new Error("Fetch Error")
                }
                return response.json(); 
            })
            .then((result)=> {
                setJobDetail(result);
                setIssues(result.issues);
            })
            .catch(err => console.error("Error fetching job details:", err));
    }, [id])

    function AddNewIssues(e){
        e.preventDefault();
    }    
    return (
        <div>
            <Link to={'/jobs'}>Back to Jobs List</Link>
                <div>JobId: {jobDetail?.id}</div>
                <div>Title: {jobDetail?.title}</div>
                <div style={{width:'300px'}}>
                EndDate<Form.Control
                    type="datetime-local"
                /><br/>
            </div>
            <Form>
                <Form.Group>
                    <Form.Label>Issues</Form.Label>
                    <Form.Control type="text" placeholder="enter issues" style={{width: '300px'}}></Form.Control>
                </Form.Group>
                <Button onClick={AddNewIssues}>+</Button>
            </Form>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        issues?.map((is)=>(
                            <tr>
                                <td>{is.iId}</td>
                                <td>{is.title}</td>
                                <td>{is.start}</td>
                                <td>{is.end}</td>
                                <td>{is.status === true?<span style={{color:'green'}}>Complete</span>:<span style={{color:'red'}}>in-Progress</span>}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )

}

export default JobDetail