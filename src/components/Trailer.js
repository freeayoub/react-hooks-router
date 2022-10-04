import React from 'react'
import Card from 'react-bootstrap/Card';
import {  useParams } from 'react-router-dom';

const Trailer = ({movie}) => {
const {id}=useParams();
const index=movie.find((el)=>el.id == id);

  return (
    <div >
   
    <Card>
    <Card.Body>  
    
    <h3 style={{color:"darkblue" }}  >Trailer </h3> 
  
      <iframe 
        width="560" height="315"
        src={index.trailer} 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      </Card.Body>
      </Card>
      <Card>
       <Card.Body> 
          <a href='/movies'  > <button  style={{color:"darkblue" }} > <b>Go  back to Movielist </b></button> </a> 
        </Card.Body>
      </Card>
  
    </div>
  );
};

export default Trailer
