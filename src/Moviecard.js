import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
function Moviecard({el}) {
  return (
    <div >
    <Card style={{ width: '18rem' }}>

    <Card.Img variant="top" src={el.image}/>

    <Card.Body>

      <Card.Title>
      {el.name}
      </Card.Title>
      
      <Rating name="read-only" value={el.rating} readOnly />

      <Card.Text>
      {el.date}
      </Card.Text>

      <Card.Text>
      {el.type}
      </Card.Text>

      <Card.Text>
      {el.description}
      </Card.Text>

      <Button variant="info">

      <Link style={{color:"#660000" }} to={`/movie/${el.id}`}>Film Trailer</Link>
    
      </Button>

    </Card.Body>

  </Card>
  
    </div>
  )
}

export default Moviecard





