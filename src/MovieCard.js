import React from 'react'
import { Card } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';



const MovieCard = (props) => {
return(<Card style={{width: '18rem' }}>
<Card.Img variant="top" src={props.film.PosterURL} />
<Card.Body>
  <Card.Title>{props.film.Title}</Card.Title>
  <StarRatingComponent value={props.film.Rating}/>
  <Card.Text> {props.film.Description}</Card.Text>
  
</Card.Body> 
</Card>)
}

export default MovieCard
