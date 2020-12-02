import React, {useContext} from 'react'

import {MovieContext} from '../MovieContext/MovieContext'
import {useHistory} from 'react-router-dom'
import './Nav.css'


const Nav = ({name, price, rank, id}) =>{
    const [movies, setMovies] = useContext(MovieContext)
    const history = useHistory();
    const handleExit = () => {
        history.push("/");
      }
    const searchFilm =  () =>{
      history.push("/MovieSearch")
    }
    const ticketOrder = () =>{
      history.push('/TicketOrder');
    }


    return(
    <div className = 'Nav'>
    <p>Список фильмов</p>
    <p>Количество фильмов в прокате: {movies.length}</p>
    <button className = 'exitBtn' onClick = {ticketOrder}>Заказать билет</button>
    <button className = 'exitBtn' onClick = {searchFilm}>Поиск Фильма</button>
    <button className = 'exitBtn' onClick = {handleExit}>Выход</button>
    </div>
    )
}

export default Nav