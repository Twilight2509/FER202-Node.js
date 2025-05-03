import react, { useCallback, useEffect, useState } from 'react';
import { Form, InputGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Job() {
    // Khai báo State để quản lý dữ liệu component
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectCatId, setSelectCatId] = useState(0);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [users, setUsers] = useState([]);

    // Sử dụng useEffect để thay thế cho các hàm componentDidMount(), componentDidUpdate()
    useEffect(() => {
        // Gọi endpoint http://localhost:9999/jobs
        fetch("http://localhost:9999/jobs")
            .then(response => response.json())
            .then(result => {
                setJobs(result);
                setFilteredJobs(result);
            }); // cập nhật trạng thái dữ liệu của job

        // Gọi endpoint http://localhost:9999/categories
        fetch("http://localhost:9999/categories")
            .then(response => response.json())
            .then(result => setCategories(result)); // cập nhật trạng thái dữ liệu của categories

        // Gọi endpoint http://localhost:9999/users
        fetch("http://localhost:9999/users")
            .then(response => response.json())
            .then(result => setUsers(result)); // cập nhật trạng thái dữ liệu của users
    }, []);

    useEffect(() => {
        const filtered = jobs.filter(job => {
            const matchTitle = job.title.toLowerCase().includes(search.toLowerCase());
            const matchCate = job.cId == selectCatId || selectCatId === 0;
            const matchUser = selectedUserId ? job.uId === parseInt(selectedUserId) : true;
            return matchTitle && matchCate && matchUser;
        });
        setFilteredJobs(filtered);
    }, [search, jobs, categories, selectCatId, selectedUserId]);

    function handleRemove(id) {
        if (window.confirm('Do you want to remove jobid ' + id)) {
            fetch("http://localhost:9999/jobs/" + id, { method: 'DELETE' })
                .then(() => {
                    alert('Remove Successfully');
                    setJobs(prevJobs => prevJobs.filter(job => job.id !== id));
                });
        }
    }
    //users.find(u => u.id == todo.userId)?.name 

    return (
        <div>
            <h3>Job List</h3>
            <InputGroup>
                <Form.Control
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search jobs..."
                />
            </InputGroup>

            <div>
                <h5>Filter by Category</h5>
                <select onChange={e => setSelectCatId(parseInt(e.target.value))}>
                    <option value={0}>-- Choose a Category --</option>
                    {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <h5>Filter by User</h5>
                {users.map((user) => (
                    <div key={user.id}>
                        <label>
                            <input
                                type="radio"
                                name="user"
                                value={user.id}
                                onChange={(e) => setSelectedUserId(e.target.value)}
                            />
                            {user.user}
                        </label>
                    </div>
                ))}
            </div>

            <div>
                <h5>Filter by Status</h5>
                <select>
                    <option value="">-- Choose a Status --</option>
                    <option value="true">Completed</option>
                    <option value="false">In-Completed</option>
                </select>
            </div>

            <Table striped bordered hover style={{ border: '3px' }}>
                <thead>
                    <tr>
                        <th>JobId</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>User</th>
                        <th>Status</th>
                        <th colSpan={2}>Function</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredJobs.map((job) => (
                            <tr key={job.id}>
                                <td>{job.id}</td>
                                <td>{job.title}</td>
                                <td>
                                    {
                                        categories.find(c => c.id == job.cId)?.name
                                    }
                                </td>
                                <td>
                                    {
                                        users.find(u => u.id == job.uId)?.user
                                    }
                                </td>
                                <td>{job.status === true ? <span style={{ color: 'green' }}>Complete</span> : <span style={{ color: 'royalblue' }}>In-Process</span>}</td>
                                <td>
                                    <Link to={`/jobs/${job.id}`}>Detail</Link>
                                </td>
                                <td>
                                    <Link to={'/jobs'} onClick={() => handleRemove(job?.id)}>Remove</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Job;