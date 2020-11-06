import React, {useState, useContext} from 'react'
import './Movie.css'
import {MovieContext} from '../MovieContext/MovieContext'

const Movie = () =>{

    const [movies, setMovies] = useContext (MovieContext)

    const handleRemove = (id) => {
        const newList = movies.filter((item) => item.id !==id)
        setMovies(newList);
    }

    return(
    <div className = 'movieDiv'>
    <ul className = 'rectangle'>
        {movies.map((item) => (
        <li key = {item.id}>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.rank}</li>
        <button onClick={() => handleRemove(item.id)}>Remove</button>
        </li>
    ))}
    </ul>
    </div>
    )
}

export default Movie