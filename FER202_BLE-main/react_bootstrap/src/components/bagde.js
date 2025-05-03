import React from 'react'
import {Container, Row, Col, Carousel, Image} from 'react-bootstrap'


export default function Bagde() {
  return (
    <Container fluid style={{backgroundColor: 'blue', fontSize:'32px', height: '300px', justifyContent:'center', alignContent:'center'}}>
        <Row>
            <Carousel>
                <Carousel.Item>
                <Image text="First slide" src='/image/image.png' style={{width: '700px', justifyItems:'center', justifyContent:'center'}}/>
                    <Carousel.Caption>
                        <h3>First slide text</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        src="/image/image.png"
                        alt="Second slide"
                        style={{width:'700px'}}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                <Image text="Third slide" src='/image/image.png' style={{width:'700px', justifyContent:'center'}}/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </Row>
    </Container>
  )
}
