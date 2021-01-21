import React from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Badge from 'react-bootstrap/Badge'
import './MovieSearchContent.css';

const MovieSearchContent = ({Poster, Title, Type, Year}) =>{

    return(
    <CardDeck className = 'cardDeck'>
        <Card className = 'card'>
            <Card.Img className='cardImg' src={Poster} alt ={Title} />
            <Card.Body className = 'cardBody'>
                <p className ='cardTitle'><Badge variant="light">{Title}</Badge></p>
                <p className ='cardType'><Badge variant="warning">{Type}</Badge></p>
            </Card.Body>
        </Card>
    </CardDeck>
    )
}
export default MovieSearchContent