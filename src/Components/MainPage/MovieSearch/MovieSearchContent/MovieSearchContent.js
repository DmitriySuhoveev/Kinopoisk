import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import './MovieSearchContent.css';

const MovieSearchContent = ({Poster, Title, Type, imdbID}) =>{
    const [lgShow, setLgShow] = useState(false);
    const [fullFilm, setFullFilm] = useState('');
    const API_KEY = 'f55568f9';

    const getFullMovieDetails = async() =>{
        const response = await fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full&`
        );
        const fullData = await response.json();
        setFullFilm(fullData);
        console.log(fullData);
        setLgShow(true);
    }

    return(
    <>
    <CardDeck className = 'cardDeck' onClick={getFullMovieDetails}>
        <Card className = 'card'>
            <Card.Img className='cardImg' src={Poster} alt = 'Изображение отсутствует' />
            <Card.Body className = 'cardBody'>
                <p className ='cardTitle'><Badge variant="light">{Title}</Badge></p>
                <p className ='cardType'><Badge variant="warning">{Type}</Badge></p>
            </Card.Body>
        </Card>
    </CardDeck>
    <Modal size="xl" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" centered='true'>
        <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
            About Film
        </Modal.Title>
        </Modal.Header>
        <Modal.Body className = "modalBody">
            <img className = "modalBodyImg" src={fullFilm.Poster} alt="Изображение отсутствует"/>
            <div className="modalBodyContent">
                <div className = "modalBodyContentTitle">
                    <p>{fullFilm.Title}</p>
                    <div className ="modalBodyContentimdbRating">{fullFilm.imdbRating}</div>
                </div>
                <div className = "RatedRuntimeGenre">
                    <div className = 'RatedRuntimeGenreValue'>{fullFilm.Rated}</div>
                    <div className = 'RatedRuntimeGenreValue'>{fullFilm.Runtime}</div>
                    <div className = 'RatedRuntimeGenreValue'>{fullFilm.Genre}</div>
                </div>
                <div className = "modalBodyContentActors"><b>Actors:</b> {fullFilm.Actors}</div>
                <div className = "modalBodyContentPlot"><b>Plot:</b> {fullFilm.Plot}</div>
            </div>
        </Modal.Body>
    </Modal>
    </>
    )
    
}
export default MovieSearchContent