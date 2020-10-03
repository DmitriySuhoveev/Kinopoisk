import React from 'react'
import '../styles/Movie.css'


const Movie = ({name, price, rank}) =>{
   


   
    return(
    <div className = 'movieDiv'>
    <ul className = 'rectangle'>
        <li>{name}</li>
        <li>{price}</li>
        <li>{rank}</li>

    </ul>
    </div>
    )
}

export default Movie