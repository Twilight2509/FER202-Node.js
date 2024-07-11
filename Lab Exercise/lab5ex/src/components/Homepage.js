import React from 'react'
import {Row, Col} from 'react-bootstrap'
import BookList from './BookList'
import Search from './Search'
import BorrowerList from './BorrowerList'

function Homepage() {
  return (
    <Row>
        <Col md={4}>
            <h2>Book</h2>
            <BookList />
        </Col>
        <Col md={8}>
            <h2>Borrower</h2>
            <Search />
            <BorrowerList />
        </Col>
    </Row>
  )
}

export default Homepage