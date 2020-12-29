import React from 'react';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import firebaseApp from '../../../utilities/firebaseConfig'
import './Nav.css';


const Nav = () =>{
    const moviesManage = useSelector(state => state.moviesManage)
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
    <p>Количество фильмов в прокате: {moviesManage.length}</p>
    <button className = 'exitBtn' onClick = {ticketOrder}>Заказать билет</button>
    <button className = 'exitBtn' onClick = {searchFilm}>Поиск Фильма</button>
    <button className = 'exitBtn' onClick = {handleExit}>Выход</button>
    </div>
    )
}

export default Nav