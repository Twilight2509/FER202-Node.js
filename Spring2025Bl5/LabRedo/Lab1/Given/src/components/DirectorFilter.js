import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Container, Form } from 'react-bootstrap';

const DirectorFilter = () => {
  const { directors, setDirector } = useContext(MovieContext);

  console.log('Directors:', directors); // Kiểm tra dữ liệu

  return (
    <Container>
      <h5>Director Filter</h5>
      {directors && directors.length > 0 ? (
        directors.map((d) => (
          <Form.Group key={d.id} >
            <Form.Check
              type="radio"
              name='director'
              label={d.name}
              value={d.id}
              onChange={(e) => setDirector(e.target.value)} // Để debug
            />
          </Form.Group>
        ))
      ) : (
        <p>No directors available</p>
      )}
    </Container>
  );
};

export default DirectorFilter;