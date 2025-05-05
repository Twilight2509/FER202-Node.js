import React, { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { MovieContext } from "../context/MovieContext";

const MovieList = () => {
  const { movie, getDirectorName, getGenreName } = useContext(MovieContext);
  return (
    <Container>
      <h1 style={{textAlign: "center"}}>List of Movies</h1>
      <Row>
        {movie.map((m) => (
          <Col md={3} mb={4} key={m.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>
                  <h3>{m.title}</h3>
                </Card.Title>
                <Card.Text>
                  <strong>Release:</strong> {m.release_year}
                </Card.Text>
                <Card.Text>
                  <strong>Duration:</strong> {m.duration} min
                </Card.Text>
                <Card.Text>
                  <strong>Director:</strong> {getDirectorName(m.director)}
                </Card.Text>
                <Card.Text>
                  <strong>Genre:</strong> {getGenreName(m.genre)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MovieList