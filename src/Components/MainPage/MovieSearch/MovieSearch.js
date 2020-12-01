import React, {useState, useEffect} from 'react'
import MovieSearchContent from './MovieSearchContent/MovieSearchContent'
import './MovieSearch.css'
const MovieSearch = () =>{
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [films, setFilms] = useState([]);
    const API_KEY = 'f55568f9';
    
    useEffect(() => {
    }, [])

    const getMovies = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `http://www.omdbapi.com/?apikey=f55568f9&t=${title}&y=${year}&plot=full`
        );
        const data = await response.json();
        setFilms(data);
        console.log(data);
    }

    const onTitleChange = (e) =>{
        e.preventDefault();
        setTitle(e.target.value)
    }
    const onYearChange = (e) =>{
        e.preventDefault();
        setYear(e.target.value)
    }

    return(
        <div>
        <form className = "movieSearchForm" onSubmit = {getMovies}>
            <h1>Search the Film</h1>
            <p>Title</p>
            <input type = 'text' name = 'title' value ={title} onChange={onTitleChange}/>
            <p>Year</p>
            <input type = 'number' name = 'year' value ={year} onChange={onYearChange}/>
            <button>Search</button>
        </form>
            <MovieSearchContent 
            Country = {films.Country} 
            Actors = {films.Actors} 
            Plot = {films.Plot}
            Poster = {films.Poster}
            Year = {films.Year}
            Genre = {films.Genre} 
            Awards = {films.Awards}
            Runtime = {films.Runtime}   
            />
        </div>
    )
}
export default MovieSearch;