import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Container, Form } from 'react-bootstrap';

const GenreFilter = () => {
  const { genre } = useContext(MovieContext);

  console.log('Genres:', genre); // Kiểm tra dữ liệu

  return (
    <Container>
      <h5>Genre Filter</h5>
      {genre && genre.length > 0 ? (
        genre.map((g) => (
          <Form.Group key={g.id} controlId={`genre-${g.id}`}>
            <Form.Check
              type="checkbox"
              label={`${g.name?.first_name || ''} ${g.name?.last_name || ''}`.trim()}
              onChange={() => console.log(`Selected genre: ${g.id}`)} // Để debug
            />
          </Form.Group>
        ))
      ) : (
        <p>No genres available</p>
      )}
    </Container>
  );
};

export default GenreFilter;