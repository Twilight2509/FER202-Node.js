import React, {useEffect, useState} from 'react'
import {Col, Container, Row, Card, Button, Form} from 'react-bootstrap'
import Side from './Side'
export default function ListProduct() {
    const [products, setProducts] = useState([])
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
        const [selectBrand, setSelectBrand] = useState(null);
        const [selectCategory, setSelectCategory] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:9999/product')
            .then(response => response.json())
            .then(result => setProducts(result))
    }, []);
    
    useEffect(()=>{
        fetch('http://localhost:9999/brand')
            .then(response => response.json())
            .then(result=> setBrands(result))
    }, [])
    useEffect(()=>{
        fetch('http://localhost:9999/category')
            .then(response => response.json())
            .then(result=> setCategories(result))
    }, [])
    

    
    const filterProducts = (selectCategory, selectBrand) => {
        let filtered = products;
    
        if (selectCategory) {
          filtered = filtered.filter(
            product => categories.find(c => c.name === selectCategory)?.id === product.category
          );
        }
    
        if (selectBrand) {
          filtered = filtered.filter(
            product => brands.find(b => b.name === selectBrand)?.id === product.brand
          );
        }
    
        setFilteredProducts(filtered);
      };

      useEffect(() => {
        filterProducts(selectCategory, selectBrand);
    }, [selectCategory, selectBrand]);


  return (
    <Container>
        <Row>
            <Col md={2}>
                <Form>
                    <h2>Category</h2>
                    {categories?.map((category)=>(
                        <Form.Check
                        key={category.id}
                        type="radio"
                        value={category.name}
                        label={category.name}
                        checked={selectCategory == category.name}
                        onChange={(e)=>setSelectCategory(e.target.value)}
                      />
                    ))}
                </Form>
            
           
                <Form>
                <h2>Brand</h2>
                    {brands?.map((brand)=>(
                        <Form.Check
                        key={brand.id}
                        type='radio'
                        value={brand.name}
                        label={brand.name}
                        checked={selectBrand == brand.name}
                        onChange={(e)=> setSelectBrand(e.target.value)}
                        />
                    ))}
                </Form>
            </Col>
            <Col md={10}>
                <h1 style={{justifyContent:'center', textAlign: 'center'}}>List of Product</h1>
                <Row className='g-2'>
                    {products?.map((product, index)=>(
                <Col md={3} lg={3} key={index}  className="mb-4 mt-3">
                    <Card style={{width:'auto', height:'auto'}}>
                        <Card.Img variant='top' src={`${process.env.PUBLIC_URL}/images/${product.image}`} height={'200px'}/>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Body>
                            <Card.Text>
                                Brand: {
                                     brands.find(b => b.id == product.brand) ? (
                                        <span style={{ color:'black', fontWeight: 'bold'}}>
                                            {brands.find(b => b.id == product.brand)?.name}
                                        </span>
                                    ) : null
                                }
                            </Card.Text>
                            <Card.Text>
                                Category:{
                                    categories.find(c => c.id == product.category) ?(
                                        <span style={{fontWeight:'bold'}}>
                                            {categories.find(c=> c.id == product.category)?.name}
                                        </span>
                                    ): null
                                }
                            </Card.Text>
                            <Card.Text>
                                <span style={{textDecoration:'line-through', color:'blue'}}>Price: ${product.price}</span>
                            </Card.Text>
                            <Card.Text>
                                <span style={{color:'red'}}>Discount: {product.discountPercentage}%</span>
                            </Card.Text>
                            <Card.Text>
                                <span>
                                    New Price: ${((product.price - (product.price * product.discountPercentage / 100)).toFixed(2))}
                                </span>
                            </Card.Text>
                            <Button variant='success' style={{alignContent:'center'}} href={`/product/${product.id}`}> View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
                </Row>
                
            </Col>
        </Row>
    </Container>
  )
}
