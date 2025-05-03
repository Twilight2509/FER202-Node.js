import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Table, Button, Form, Card} from 'react-bootstrap'

export default function List() {
    const [products, setProducts] = useState([])
    const [selectProduct, setSelectProduct] = useState([])
    const [searchTerm, setSearchTerm] = useState(''); 
    const [reviewers, setReviewers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9999/products')
            .then(response => response.json())
            .then(result=> {
                setProducts(result);
                setReviewers(Array.isArray(result.reviewers) ? result.reviewers : result);
            })
    }, [])

    const handleClickProduct = (product) =>{
        if (selectProduct.find((sp) => sp.id === product.id)) {
            alert('This already has the same products');
        } else {
            alert('New Products added');
            setSelectProduct(() => [product]);
        }
    }
    
    const filteredProducts = products?.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    console.log(selectProduct);
    
  return (
    <Container>
        <Row>
            <Col md={6}>
            <h2>Product List</h2>
            <Form.Control
                type='text'
                placeholder='Enter title search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
                <Table hover bordered>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts?.map((product)=>(
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => handleClickProduct(product)}>View Detail</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
            <Col md={6}>
                <h5 style={{fontWeight:'bold', color:'black'}}>Reviews detail: </h5>
                {selectProduct.length === 0 ?(
                    <div>
                        <h5>Please select a products</h5>
                    </div>
                ): (
                    <Form>
                        {selectProduct?.map((sp)=>(
                            <Form>
                                <Form.Group>
                                    <Form.Text>ProductId: {sp.id}</Form.Text><br/>
                                    <Form.Text>Title: {sp.title}</Form.Text><br/>
                                    <Form.Text>Category: {sp.category}</Form.Text><br/>
                                    <Form.Text>Price: {sp.price}</Form.Text><br/>
                                </Form.Group>
                                <Form.Group>
                                    <h5 style={{fontWeight:'bold'}}>Add a new Review</h5>
                                    <Form>
                                        <Form.Text>Reviewer Name</Form.Text>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Reviewers name'
                                        />
                                        <Form.Text>Comment</Form.Text>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Comment'
                                        />
                                        <Form.Text>
                                            Rating
                                            {[1,2,3,4,5]?.map((value ,index)=>(
                                                <Form.Check
                                                    type='checkbox'
                                                    inline
                                                    value={value}
                                                    label={value}
                                                />
                                            ))}
                                        </Form.Text>
                                    </Form>
                                    <button>Send Review</button>
                                </Form.Group>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>ReviewerName</th>
                                            <th>Comment</th>
                                            <th>Date</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectProduct?.map((sp)=>(
                                            <tr>
                                                <td>{}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Form>
                        ))}
                        <button style={{marginLeft:'500px'}}>Clear Review</button>
                    </Form>
                )}
            </Col>
        </Row>
    </Container>
  )
}
