import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function Side({onFilterChange }) {
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectBrand, setSelectBrand] = useState(null);
    const [selectCategory, setSelectCategory] = useState(null)

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

        const handleCategoryChange = (e) => {
            setSelectCategory(e.target.value);
            onFilterChange(e.target.value, selectBrand); // Pass the selected category to ListProduct
          };

          const handleBrandChange = (e) => {
            setSelectBrand(e.target.value);
            onFilterChange(selectCategory, e.target.value); // Pass the selected brand to ListProduct
          };
  return (
    <Container>
        <Row>
            <Col>
                <Form>
                    <h2>Category</h2>
                    {categories?.map((category)=>(
                        <Form.Check
                        key={category.id}
                        type="radio"
                        value={category.name}
                        label={category.name}
                        checked={selectCategory == category.name}
                        onChange={handleCategoryChange}
                      />
                    ))}
                </Form>
            </Col>
            <Col>
            <Form>
                <h2>Brand</h2>
                    {brands?.map((brand)=>(
                        <Form.Check
                        key={brand.id}
                        type='radio'
                        value={brand.name}
                        label={brand.name}
                        checked={selectBrand == brand.name}
                        onChange={handleBrandChange}
                        />
                    ))}
                </Form>
            </Col>
        </Row>
    </Container>
  )
}
