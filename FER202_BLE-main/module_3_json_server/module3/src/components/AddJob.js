import { Form } from "react-bootstrap";
import axios from 'axios'
import { useState, useEffect } from "react";

function AddJob(){
    const [categories, setCategories] = useState([]);
    const [jobTitle, setJobTitle] = useState("");
    const [catId, setCatId] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:9999/categories")
        .then(response => setCategories(response.data))
    }, [])


    const AddNewJob= ()=>{
        if(!jobTitle || !catId || catId == "0" ){
            alert("Please fill all require")
        }
        const NewJob = {
            title: jobTitle,
            categoryId: catId
        }
        axios.post("http://localhost:9999/jobs", NewJob)
            .then((response) => {
                alert("Succesfully")
                setJobTitle("");
                setCatId("")
            })
    }
    return(
        <div>
            <h3>Add New Job</h3>
            <Form>
                Job Title <Form.Control type="text" value={jobTitle} style={{width:'300px'}} onChange={(e)=>setJobTitle(e.target.value)}/>
            <Form>
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" style={{width:'300px'}} value={catId} onChange={(e)=> setCatId(e.target.value)}>
                    
                    <option value={0}>--Select Category</option>
                    {
                        categories?.map((caseItem) => (
                                <option>{caseItem.name}</option>
                        ))
                    }
               
                </Form.Control>
            </Form>
            <button type="button" onClick={AddNewJob} style={{ marginTop: "10px" }}>
                    Add Job
            </button>
            </Form>
        </div>
    )
}

export default AddJob;