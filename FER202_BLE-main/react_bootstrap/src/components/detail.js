import React, {useState} from 'react'
import {data} from '../data'
import { Card, Button, Col, Row } from 'react-bootstrap'

export default function Detail() {
    const users = data.users;
    const products = data.products;
    const orders = data.orders;
    const customers = data.customers;

    const CustomerName = (custId) =>{
        return customers.find(customer => customer.custId == custId)?.custName || "None"
    }

    const getNewProduct = (top = 4) =>{
        const sortedProducts = [...products].sort((a, b) => b.pId - a.pId);
    
        return sortedProducts.slice(0, top);
    }
    //Xuất hiện nhiều nhất trong các đơn hàng??
    //
    const getBestSeller = (top = 4) =>{
        return products.slice(0, top)
    }
  return (
     <>
        <Row>
        <h1>Bell Selles</h1>
        {getBestSeller().map((product, index)=>(
                <Col md={4} lg={3}>
                    <Card>
                    <Card.Body>
                    <Card.Img src={product.thumbnail} style={{width: "100px", height:"100px"}}/>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle>Price: {product.price}</Card.Subtitle>
                        <Card.Text>
                            <strong>Reviews: </strong>
                            <ul>
                                {product.comments.map((comment, index)=>(
                                    <li key={index} style={{fontSize:'11px'}}>
                                        <strong>{CustomerName(comment.custId)}</strong> {comment.text} | <strong>Rating:</strong>{comment.rating}
                                    </li>
                                ))}
                            </ul>
                        </Card.Text>
                        <Button>View Detail</Button>
                    </Card.Body>
                    
                    </Card>
                </Col>
            
        ))}
        </Row>
        <Row>
            <h1>New Products</h1>
            {getNewProduct().map((product, index) => (
                <Col >
                    <Card>
                    <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Img src={product.thumbnail} style={{width: "100px", height:"100px"}} />
                        <Card.Text>
                            <strong>Price:</strong> ${product.price} <br />
                            <strong>Discount:</strong> {product.discount}%
                        </Card.Text>
                        <Button>View Detail</Button>
                    </Card.Body>
                    </Card>
                </Col>
            ))}
            
        </Row>
     </>
  )
}
