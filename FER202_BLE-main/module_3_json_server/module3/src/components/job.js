import react, {useCallback, useEffect, useState} from 'react'
import {Form, InputGroup, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Job() {
    //Khai báo State để quán lý dữ liệu component
    const [jobs, setJobs] = useState([])
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState("");
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectCatId, setSelectCatId] = useState(0)

//Sử dụng useEffect để they thế cho các hàm componentDidMount(), componentDidUpdate()
    useEffect(()=>{
        //Gọi endpoint http://localhost:9999/jobs
        fetch("http://localhost:9999/jobs")
            .then(response=> response.json())
            .then(result => {
                setJobs(result);    
                setFilteredJobs(result);
            }); //cập nhật trạng thái dữ liệu của job

         //Gọi endpoint http://localhost:9999/categories
         fetch("http://localhost:9999/categories")
         .then(response=> response.json())
         .then(result => setCategories(result)); //cập nhật trạng thái dữ liệu của job
    }, [])
    
    useEffect(()=>{
        const filtered = jobs.filter(job =>{
            // job.title.toLowerCase().includes(search.toLowerCase()) 
            const marchTitle = job.title.toLowerCase().includes(search.toLowerCase());
            const marchCate = job.cId == selectCatId || selectCatId === 0
            return marchTitle && marchCate;
    });
        setFilteredJobs(filtered)
    }, [search, jobs, categories, selectCatId]);
    
    function handleRemove(id){
        if(window.confirm('Do you want to remove jobid' + id)){
            fetch("http://localhost:9999/jobs/" + id, {method:'DELETE'})
                .then(
                    alert('Remove Succesfully')
                )
        }
    }
    return(
        <div>
            <h3>Job List</h3>
            <InputGroup>
                <Form.Control
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                    placeholder="Search jobs..."
                />
            </InputGroup>
            Category: {
                <select  onChange={e => setSelectCatId(parseInt(e.target.value))}>
                    <option value={0}>-- Choice a Category --</option>
                    {categories.map((c)=>(
                        
                        <option key={c.id} value={c.id}>
                            
                            {c.name}
                        </option>
                    ))}
                </select>
            }
            Status: <select>
                <option value="">-- Choice a Status</option>
                <option value="true">Completed</option>
                <option value="false">In-Completed</option>
            </select>
            <Table striped bordered hover style={{border:'3px'}}>
                <thead>
                    <tr>
                        <th>JobId</th>       
                        <th>Title</th>  
                        <th>Category</th>  
                        <th>Status</th>  
                        <th colSpan={2}>Function</th>  
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredJobs.map((job)=>(
                            <tr key={job.id}>
                                <td>{job.id}</td>
                                <td>{job.title}</td>
                                <td>    
                                {
                                    categories.find(c => c.id == job.cId)?.name
                                }
                                </td>
                                <td>{job.status===true?<span style={{color:'green'}}>Complete</span>:<span style={{color:'royalblue'}}>In-Process</span>}</td>
                                <Link to={`/jobs/${job.id}`}>Detail</Link>
                                <Link to={'/jobs'} onClick={() => handleRemove(job?.id)}>Remove</Link>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Job;