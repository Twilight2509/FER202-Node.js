import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieProvider from "./context/MovieContext";
import MovieList from "./components/MovieList";
import DirectorFilter from "./components/DirectorFilter";
import GenreFilter from "./components/GenreFilter";

const App = () => {
  return (
    <MovieProvider>
      <Container>
        <Row>
          <Col md={3}>
            <DirectorFilter />
            <GenreFilter />
          </Col>
          <Col md={9}>
            <MovieList />
          </Col>
        </Row>
      </Container>
    </MovieProvider>
  );
};

export default App;
