import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';

const Index = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersResponse = await axios.get('http://localhost:9999/user');
      const todosResponse = await axios.get('http://localhost:9999/todo');
      setUsers(usersResponse.data);
      setTodos(todosResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUserFilter = (userId) => {
    setSelectedUsers(prevSelected => {
      if (prevSelected.includes(userId)) {
        return prevSelected.filter(id => id !== userId);
      } else {
        return [...prevSelected, userId];
      }
    });
  };

  const handleSort = (order) => {
    setSortOrder(order);
    setTodos(prevTodos => [...prevTodos].sort((a, b) => {
      if (order === 'asc') {
        return a.userId - b.userId;
      } else {
        return b.userId - a.userId;
      }
    }));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9999/todo/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const filteredTodos = selectedUsers.length > 0
    ? todos.filter(todo => selectedUsers.includes(todo.userId) && todo.completed)
    : todos.filter(todo => todo.completed);

  const getUserName = (userId) => {
    const user = users.find(user => user.id === userId);
    return user ? user.name : 'Unknown';
  };

  return (
    <div>
      <div className='row'>
        <div className='col-md-9'>
          <h1>Test for Lab</h1>
          <DropdownButton id="dropdown-basic-button" title={`Sort: ${sortOrder === 'asc' ? 'Ascending' : 'Descending'} by UserID`} className="mb-2">
            <Dropdown.Item onClick={() => handleSort('asc')}>Ascending</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSort('desc')}>Descending</Dropdown.Item>
          </DropdownButton>
          <table className='table table-striped table-hover table-bordered'>
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>User Name</th> 
                <th>UserID</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredTodos.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{index + 1}</td>
                  <td>{todo.title}</td>
                  <td>{getUserName(todo.userId)}</td>
                  <td>{todo.userId}</td>
                  <td>
                    <button className='btn btn-success' onClick={() => handleDelete(todo.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='col-md-3'>
          <h2>Users</h2>
          {users.map((user, index) => (
            <div key={user.id}>
              <input
                type="checkbox"
                checked={selectedUsers.includes(user.id)}
                onChange={() => handleUserFilter(user.id)}
              />
              {index + 1}.{user.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
