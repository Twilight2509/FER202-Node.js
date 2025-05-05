import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieList from "../components/MovieList";
import DirectorFilter from "../components/DirectorFilter";
import GenreFilter from "../components/GenreFilter";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <DirectorFilter />
          <GenreFilter />
        </Col>
        <Col md={10}>
          <MovieList />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
