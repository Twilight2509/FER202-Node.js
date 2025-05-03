import React, { useState, useEffect } from 'react'
import {Col, Container, Row, Form, InputGroup, Table, Button, Nav} from 'react-bootstrap'
import Navbar from './Navbar';
import axios from 'axios';

export default function RecipesList() {
    const [recipes, setRecipes] = useState([]);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState(0)
    const [filteredTags, setFilteredTags] = useState([])
    const [selectRecipe, setSelectRecipe] = useState([])
    // const [selectVote, setSelectVote] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:9999/recipes")
            .then(response => response.json())
            .then(result => setRecipes(result));
    }, [])

    useEffect(()=>{
        fetch("http://localhost:9999/users")
            .then(response => response.json())
            .then(result => setUsers(result))
    }, [])

    useEffect(() => {
        let sortedRecipes = [...recipes];
        // switch (sort) {
        //     case "ASC":
        //         sortedRecipes.sort((a, b) => a.rating - b.rating);
        //         break;
        //     case "DESC":
        //         sortedRecipes.sort((a, b) => b.rating - a.rating);
        //         break;
        //     default:
        //         break;
        // }
        if (sort === "ASC") {
            sortedRecipes.sort((a, b) => a.rating - b.rating);
        } else if (sort === "DESC") {
            sortedRecipes.sort((a, b) => b.rating - a.rating);  
        }
        const filtered = sortedRecipes.filter(recipe => 
            Array.isArray(recipe.tags) &&
            recipe.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
            // Array.isArray(recipe.ingredients) &&
            // recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(search.toLowerCase()))
            // recipe.name.toLowerCase().includes(search.toLowerCase()) 
        );
        setFilteredTags(filtered);
    }, [search, recipes, sort]);

    const handldeClickRecipes =(recipe)=>{
        if(selectRecipe.find((sr)=> sr.id === recipe.id)){
            alert('This already have a same Recipe')
        } else {
            setSelectRecipe((prev) => [...prev, recipe]);
        }
    };

    // const handldeClickVote = (recipe) =>{
    //     setSelectVote((preo) => [...preo, recipe])
    // }

    const handleRemoveRecipe = (id) => {
        window.confirm("Are you sure to remove")
        setSelectRecipe((prev) => prev.filter((recipe) => recipe.id !== id));
        
    };
    
    const SaveRecipeClick = (e)=>{
        e.preventDefault();
        const NewRecipe = {

        }
        axios.post("http://localhost:9999/your_recipes", NewRecipe)


        alert("")
    }

  return (
    <Container>
        <Navbar/>

        <Row style={{justifyItems: 'center', alignItems:'center', justifyContent:'center', alignContent:'center'}}>
            <h3 style={{fontSize:'40px'}}>
                Recipes Management
            </h3>
        </Row>
        <Row>
            <Col md={4}>
                <InputGroup>
                    <Form.Control
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Enter tag to search...'
                    />
                </InputGroup>
            </Col>
            <Col md={4}>
            <Form>
                    <Form.Select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value={0} placeholder='Sort by Rating:'>--\/</option>
                            <option value="ASC">ASC</option>
                            <option value="DESC">DESC</option>
                        </Form.Select>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col md={8}>
                <Table  striped bordered hover style={{border:'3px'}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Tags</th>
                            <th>User</th>
                            <th>Ingredient</th>
                            <th>Rating</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredTags?.map((recipe) =>(
                                <tr key={recipe.id}>
                                    <td>{recipe.id}</td>
                                    <td>{recipe.name}</td>
                                    <td>{recipe.tags.join("\n")}</td>
                                    <td>
                                        {
                                            users.find(u => u.id == recipe.userId)?
                                            `${users.find(u => u.id == recipe.userId)?.firstName } ${users.find(u => u.id == recipe.userId)?.lastName}`
                                            : '---------'
                                        }   
                                    </td>   
                                    <td>{recipe.ingredients}</td>
                                    <td>{recipe.rating}</td>
                                    <td>
                                        {/* <Button variant='success' onClick={() => handldeClickVote(recipe)}>Vote</Button> */}
                                        <Button onClick={() => handldeClickRecipes(recipe)}>Add</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Col>
            <Col md={4}>
                    {/* {selectVote ? (
                        <>
                        <h1>Vote</h1>
                            <Table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectVote.map((res) => (
                                    <tr key={res.id}>
                                        <td>{res.id}</td>
                                        <td>{res.name}</td>
                                        <td>
                                        <Button variant='false'>Remove</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <Button>Save</Button>
                        </Table>
                        </>

                    ) : 'Empty'} */}


                    {selectRecipe.length == 0 ? (
                        <div>
                            <h1>Your Recipes</h1>
                            <h2>Empty</h2>
                        </div>
                    ) : (
                        <>
                        <h1>Your Recipes</h1>
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
                                        <Button variant='secondary' onClick={() => handleRemoveRecipe(res.id)}>Remove</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <Button onClick={SaveRecipeClick}>Save</Button>
                        </Table>
                        </>

                    )}
            </Col>
        </Row>
    </Container>
  )
}
