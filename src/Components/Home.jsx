import React, { useEffect, useState } from 'react'
import Main from './Main';
import { Col, Container, Row } from 'react-bootstrap';

function Home() {

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
   return (
          <Container>
           <Row>
               {restaurants && restaurants.map((restlist)=>(
              
              <Col md={3} className='my-3' key={restlist.id}>         
                                                                {/* key={restlist.id} */}
               <Main  forprops = {restlist} />   {/* should have unique key for each list which iterarted from .map */}
                                                                 {/* it may id or index or something unique  */}
              </Col>

              ))}
            </Row>
          </Container>
  )
}
export default Home