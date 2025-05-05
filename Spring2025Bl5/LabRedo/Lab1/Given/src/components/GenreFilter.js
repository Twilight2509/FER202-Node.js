import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Container, Form } from 'react-bootstrap';

const GenreFilter = () => {
  const { genres, setGenre } = useContext(MovieContext);

  console.log('Genres:', genres); // Kiểm tra dữ liệu

  return (
    <Container>
      <h5>Genre Filter</h5>
      {genres && genres.length > 0 ? (
        genres.map((g) => (
          <Form.Group key={g.id} controlId={`genre-${g.id}`}>
            <Form.Check
              type="radio"
              name='genre'
              value={g.id}
              label={`${g.name?.first_name || ''} ${g.name?.last_name || ''}`.trim()}
              onChange={(e) => setGenre(e.target.value)} // Để debug
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