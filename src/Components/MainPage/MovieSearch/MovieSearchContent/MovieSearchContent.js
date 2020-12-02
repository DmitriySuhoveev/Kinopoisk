import React from 'react'
import './MovieSearchContent.css'
const MovieSearchContent = ({Country, Actors, Plot, Poster, Year, Genre, Awards, Runtime}) =>{

    return(
        <div className = "searchContentDiv">
            <div className = "picDiv"><img src = {Poster} alt = ''/></div>
            <ul className = "searchContentUl">
                <li>Год производства: {Year}</li>
                <li>Страна производства: {Country}</li>
                <li>Жанр: {Genre}</li>
                <li>Главные актёры: {Actors}</li>
                <li>Награды и номинации: {Awards}</li>
                <li>Время: {Runtime}</li>
                { <li>Сюжет: {Plot}</li>}
            </ul>
        </div>
    )
}
export default MovieSearchContent