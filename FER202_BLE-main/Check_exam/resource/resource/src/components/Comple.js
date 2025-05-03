import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import axios from 'axios';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [selectedUserID, setSelectedUserId] = useState([]);
    const [sort, setSort] = useState('');
    
    useEffect(() => {
        fetch("http://localhost:9999/todo")
            .then(response => response.json())
            .then(result => setTodos(result))
    }, []);
    
    useEffect(() => {
        fetch("http://localhost:9999/user")
            .then(response => response.json())
            .then(result => setUsers(result))
    }, []);
    
    useEffect(() => {
        let filtered = [...todos];
        
        // Filter by completed status and selected user IDs
        filtered = filtered.filter(todo => {
            const completedFilter = sort === '' || todo.completed === (sort === 'true');
            const matchUser = selectedUserID.length === 0 || selectedUserID.includes(todo.userId);
            return matchUser && completedFilter;
        });
        
        // Sorting by title (ascending or descending)
        if (sort === 'asc') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === 'desc') {
            filtered.sort((a, b) => b.title.localeCompare(a.title));
        }

        setFilteredTodos(filtered);
    }, [todos, selectedUserID, sort]);

    const handleSortToggle = () => {
        setSort(prevSort => prevSort === 'asc' ? 'desc' : 'asc');
    };

    const handleUserChange = (e) => {
        const userId = parseInt(e.target.value);
        setSelectedUserId(prevSelected =>
            prevSelected.includes(userId)
                ? prevSelected.filter(id => id !== userId)
                : [...prevSelected, userId]
        );
    };

    return (
        <Container>
            <Row>
                <Col style={{ justifyItems: 'center' }}>
                    <h1>Todo List</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={handleSortToggle}>Sort: {sort === 'asc' ? 'Ascending' : 'Descending'}</Button>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>User</th>
                                <th>Completed</th>
                                <th>Change status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTodos?.map((todo) => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>
                                        {
                                            users.find(u => u.id === todo.userId)?.name
                                        }
                                    </td>
                                    <td>{todo.completed === true ? <span style={{ color: 'blue' }}>Finished</span> : <span style={{ color: 'red' }}>Unfinished</span>}</td>
                                    <td>
                                        <Button variant='success'>Change</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col md={4}>
                    <Form>
                        <h3>User</h3>
                        {users.map((user) => (
                            <div key={user.id}>
                                <label>
                                    <input
                                        type='checkbox'
                                        value={user.id}
                                        onChange={handleUserChange}
                                    />
                                    {user.name}
                                </label>
                            </div>
                        ))}
                    </Form>
                    <Form>
                        <h3>Completed</h3>
                        <Form.Check
                            type='radio'
                            label='Finished'
                            name='sort'
                            value='true'
                            onChange={(e) => setSort(e.target.value)}
                            checked={sort === 'true'}
                        />
                        <Form.Check
                            type='radio'
                            label='Unfinished'
                            name='sort'
                            value='false'
                            onChange={(e) => setSort(e.target.value)}
                            checked={sort === 'false'}
                        />
                        <Form.Check
                            type='radio'
                            label='All'
                            name='sort'
                            value=''
                            onChange={(e) => setSort(e.target.value)}
                            checked={sort === ''}
                        />
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
