import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Main({forprops}) {
  // console.log(forprops);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={forprops.photograph} />
      <Card.Body>
        <Card.Title> <h5>{forprops.name}</h5></Card.Title>
        <br />
        <Card.Text>
          <h5>{forprops.address}</h5>
        </Card.Text>
        <Button variant="success" as={Link} to={`${forprops.id}`}>know more </Button>
      </Card.Body>
    </Card>
  )
}

export default Main