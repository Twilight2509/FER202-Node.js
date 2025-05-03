import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import {useParams, Link, useNavigate} from 'react-router-dom'

export default function ProductDetail() {
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:9999/product/${id}`)
            .then(response =>response.json())
            .then(result => setProductDetails(Array.isArray(result) ? result : [result]))
    }, [id])
    
    const handleDelete = () => {
        // Show the confirmation dialog first
        const isConfirmed = window.confirm('Do you want to delete this product?');
      
        // If the user confirms, send the DELETE request
        if (isConfirmed) {
          fetch(`http://localhost:9999/product/${id}`, {
            method: 'DELETE',
          })
            .then((response) => {
              if (response.ok) {
                // If delete is successful, navigate back to the list page
                navigate('/'); // Or wherever your product list page is located
              } else {
                alert('Failed to delete the product');
              }
            })
            .catch((error) => {
              console.error('Error:', error);
              alert('An error occurred while deleting the product');
            });
        }
      };
      
  return (
    <Container>
        <Row>
            <Col md={6} className='mt-5'>
                <Card style={{height:'auto', width:'1000px'}}>
                    <Row>
                        <Col md={6}>
                        {productDetails?.map((pd)=>(
                             <Card.Img
                             variant="top"
                             src={`${process.env.PUBLIC_URL}/images/${pd.image}`}
                             height={'500px'}
                             width={'100%'}
                           />
                        ))}
                        </Col>
                        <Col>
                            {productDetails?.map((pd)=>(
                                 <Card.Body>
                                 <Card.Title>Product Detail: {pd.title}</Card.Title>
                                 <Card.Text style={{fontWeight:'bold'}}>id: {pd.id}</Card.Text>
                                 <Card.Text>
                                    <span style={{fontWeight:'bold'}}>Decription: </span><span>{pd.description}</span>
                                 </Card.Text>
                                 <Card.Text>
                                   <span style={{fontWeight:'bold' ,textDecoration:'line-through', color:'blue'}}>Price: ${pd.price}</span> 
                                 </Card.Text>
                                 <Card.Text>
                                   <strong style={{color: 'red'}}>Discount: {pd.discountPercentage}%</strong>
                                 </Card.Text>
                                 <Card.Text>
                                   <strong>New Price:</strong> $
                                   {(
                                     pd.price -
                                     (pd.price * pd.discountPercentage) / 100
                                   ).toFixed(2)}
                                 </Card.Text>
                                 <Card.Text>Rating: {pd.rating}</Card.Text>
                                 <Card.Text>Stock: {pd.stock}</Card.Text>
                                 <div className="d-flex">
                                        <Button variant="success" href="/" style={{marginRight:'20px'}}>Back to List</Button>
                                         <Button variant="danger" href="/" onClick={handleDelete}>Delete</Button>
                                </div>
                               </Card.Body>
                            ))}
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}
