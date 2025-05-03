import React, { useState, useEffect } from 'react'
import { Button, Card, CardGroup, Col, Container, Form, InputGroup, Row, Table } from 'react-bootstrap';
import MyNavbar from './Navbar';
import { useNavigate } from 'react-router-dom';

export default function Rescipes() {
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([])
    const [selectRecipe, setSelectRecipe] = useState([])
    const [filteredTags, setFilteredTags] = useState([]) 
    const [filteredRecipes, setFilteredRecipes] = useState([]) 
    const navigate = useNavigate(); 

    useEffect(() => {
        // Fetch tất cả công thức khi trang được tải
        fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(result => setRecipes(result.recipes || []));
        
        // Fetch tất cả các tag
        fetch('https://dummyjson.com/recipes/tags')
            .then(response => response.json())
            .then(result => setTags(result));
    }, []);
    
    useEffect(() => {
        
        let filtered = recipes;

        if (search) {
            filtered = filtered.filter((recipe) =>
                recipe.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (filteredTags.length > 0) {
            filtered = filtered.filter((recipe) =>
                recipe.tags.some((tag) => filteredTags.includes(tag))
            );
        }

        setFilteredRecipes(filtered);
    }, [search, filteredTags, recipes]);

    const handldeClickRecipes = (recipe) => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            alert('Please log in to add recipes to your cart');
            navigate('/login');
            return; 
        }
        if (selectRecipe.find((sr) => sr.id === recipe.id)) {
            alert('This already has the same Recipe');
        } else {
            alert('New Recipe added');
            setSelectRecipe((prev) => [...prev, recipe]);
        }
    };

    const handleRemoveRecipe = (id) => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            alert('Please log in to add recipes to your cart');
            navigate('/login');
            return;
        }
        if (window.confirm("Are you sure to remove?")) {
            setSelectRecipe((prev) => prev.filter((recipe) => recipe.id !== id));
        }
    };

    const NavigateToDetail = (recipe) => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            alert('Please log in to add recipes to your cart');
            navigate('/login');
            return;
        }
        navigate(`/recipes/${recipe.id}`);
    };

    const handleTagChange = (e) => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            alert('Please log in to add recipes to your cart');
            navigate('/login');
            return;
        }
        const selectedTag = e.target.value;
        if (selectedTag === "") {
            setFilteredTags([]);
        } else {
            const selectedTags = Array.from(e.target.selectedOptions, (option) => option.value);
            setFilteredTags(selectedTags);
        }
    };

    const handleSaveCart = () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            alert('Please log in to save your cart');
            navigate('/login');
            return;
        }
        const newRecipes = selectRecipe.map((recipe)=>({
            id: recipe.id,
            name: recipe.name,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            userId: recipe.userId
        }))
        fetch('http://localhost:9999/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipes),
        })
        .then(response => response.json())
        .then(data => {
            alert('Cart saved successfully!');
        })
        .catch(error => {
            alert('Failed to save cart. Please try again.');
        });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <MyNavbar />
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Enter recipe name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </InputGroup>
                    <Row>
                        {filteredRecipes?.map((recipe, index) => (
                            <Col md={2} lg={4} key={index} className="mb-4">
                                <Card style={{ width: '250px', height: '400px' }}>
                                    <Card.Img variant="top" src={recipe.image} onClick={() => NavigateToDetail(recipe)} />
                                    <Card.Body>
                                        <Card.Title>{recipe.name}</Card.Title>
                                        <Card.Text>Rating: {recipe.rating}</Card.Text>
                                        <Button onClick={() => handldeClickRecipes(recipe)}>Add Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                    <Form.Select onChange={handleTagChange}>
                        <option value="">All</option> 
                            {tags?.map((tag, index) => (
                                <option key={index} value={tag}>
                                    {tag}
                                </option>
                            ))}
                        </Form.Select>
                    </Row>
                    <Row>
                        {selectRecipe.length === 0 ? (
                            <div>
                                <h1>Cart</h1>
                                <h2>Empty</h2>
                            </div>
                        ) : (
                            <>
                                <h1>Cart</h1>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Function</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectRecipe.map((res) => (
                                            <tr key={res.id}>
                                                <td>{res.id}</td>
                                                <td>{res.name}</td>
                                                <td>
                                                    <Button variant="secondary" onClick={() => handleRemoveRecipe(res.id)}>
                                                        X
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <Button  onClick={handleSaveCart}>Save</Button>
                                </Table>
                            </>
                        )}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
