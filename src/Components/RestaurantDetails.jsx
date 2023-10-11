import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function RestaurantDetails() {
  const {id} = useParams();
 
  // console.log(id);
  const [restaurants , setRestaurants ] = useState([]);

  useEffect(() => {
              
    const  fetchdata = async() => {

      let result = await fetch('/restaurants.json')
      .then((data) => data.json());
  
          //  console.log(result.restaurants);
           setRestaurants(result.restaurants);
          }
    fetchdata()
  }, [])
  
  // console.log(restaurants);
   const restdetail = restaurants.find((item)=> item.id == id)
    // console.log(restdetail);

  return (
    <Container>
      <Row>
        <Col md={6} className='mt-4'>
        {
          restdetail && (
            <Card>
            <Card.Img variant="top" src={restdetail.photograph} />
            <Card.Body>
              <Card.Title>{restdetail.name}</Card.Title>
              <Card.Text>
              {restdetail.reviews[0].comments}
              </Card.Text>
              <Button variant="success">Order now</Button>
            </Card.Body>
              </Card>
           )
        }
        </Col>
        <Col md={6} className='mt-4'>
        {
          restdetail && (
            <Card >
          
           <ListGroup variant="flush">

        <ListGroup.Item> <h5>Cuisine : {restdetail.cuisine_type}</h5></ListGroup.Item>
        <ListGroup.Item> <h5>Neighborhood : {restdetail.neighborhood}</h5></ListGroup.Item>
        <ListGroup.Item> <h5>Operating hours</h5></ListGroup.Item>
        <ListGroup.Item>Monday : {restdetail.operating_hours.Monday}</ListGroup.Item>
        <ListGroup.Item>Tuesday : {restdetail.operating_hours.Tuesday}</ListGroup.Item>
        <ListGroup.Item>Wednesday : {restdetail.operating_hours.Wednesday}</ListGroup.Item>
        <ListGroup.Item>Thursday : {restdetail.operating_hours.Thursday}</ListGroup.Item>
        <ListGroup.Item>Friday : {restdetail.operating_hours.Friday}</ListGroup.Item>
        <ListGroup.Item>Saturday : {restdetail.operating_hours.Saturday}</ListGroup.Item>
        <ListGroup.Item>Sunday : {restdetail.operating_hours.Sunday}</ListGroup.Item>

            </ListGroup>
            
              </Card>
              )
        }
        </Col>
      </Row>
    </Container>
  )
}

export default RestaurantDetails