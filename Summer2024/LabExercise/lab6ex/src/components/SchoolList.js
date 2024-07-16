import React from 'react';
import { Card, ListGroup, Form } from 'react-bootstrap';

const SchoolList = ({ schools, selectedSchools, toggleSchoolSelection }) => {
  return (
    <Card className="no-border">
      <Card.Header>Schools</Card.Header>
      <Card.Body>
        <ListGroup className="no-border">
          {schools.map((school) => (
            <ListGroup.Item key={school.id} className="no-border">
              <Form.Check
                type="checkbox"
                label={school.name}
                checked={selectedSchools.includes(school.id)}
                onChange={() => toggleSchoolSelection(school.id)}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default SchoolList;
