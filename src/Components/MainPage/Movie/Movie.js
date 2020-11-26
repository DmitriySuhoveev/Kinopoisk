import React, {useState, useContext} from 'react'
import './Movie.css'
import {MovieContext} from '../MovieContext/MovieContext'
import AccordionMovie from '../AccordionMovie/AccordionMovie'

const Movie = () =>{

    const [movies, setMovies] = useContext (MovieContext)
    const [AccordName, setAccordName] = useState('')
    const handleRemove = (id) => {
        const idTodDel = movies.findIndex(item => item.id === id);
        let beforeDelItem = movies.slice(0, idTodDel);
        let afterDelItem = movies.slice(idTodDel + 1);
        let newData = [...beforeDelItem, ...afterDelItem];
        setMovies(newData);
    }

    return(
    <div className = 'movieDiv'>
    <ul className = 'rectangle'>
        {movies.map((item) => (
            <div key = {item.id} className = 'movieList'>
              <li>Название: {item.name}</li>
              <li>Бюджет: {item.price}$</li>
              <li>Рейтинг: {item.rank}</li>
              <AccordionMovie name = {item.name} description = {item.description}/>
        <button className = 'deleteBtn' onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
    ))}
    </ul>
    </div>
    )
}

export default Movie