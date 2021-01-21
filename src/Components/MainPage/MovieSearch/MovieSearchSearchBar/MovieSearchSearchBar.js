import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {movieAppend} from '../../../../Redux/Actions';
import MovieSearchContent from '../MovieSearchContent/MovieSearchContent'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieSearchSearchBar.css';

const MovieSearchSearchBar = () =>{
    const moviesManage = useSelector(state => state.moviesManage);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [films, setFilms] = useState([]);
    const API_KEY = 'f55568f9';
    
    useEffect(() => {
    }, [])
    const getMovies = async () => {
        const response = await fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&plot=full&`
        );
        const data = await response.json();
        setFilms(data.Search);
        console.log(data.Search);
    }

    const onTitleChange = (e) =>{
        e.preventDefault();
        setTitle(e.target.value)
    }

    return(
        <div className ='MovieSearchSearchBarDiv'>
            <InputGroup className="mb-3">
                <FormControl placeholder="Название фильма" type = 'text' value={title} name='title' onChange={onTitleChange}/>
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={getMovies}>Button</Button>
                    </InputGroup.Append>
            </InputGroup>
            <div className='MovieSearchSearchBarFilms'>
            {films.map((film) => (
                <MovieSearchContent
                    Poster = {film.Poster}
                    Title = {film.Title}
                    Type = {film.Type}
                    Year = {film.Year}
                />
            ))}
            </div>
            
        </div>
    )
}

export default MovieSearchSearchBar;