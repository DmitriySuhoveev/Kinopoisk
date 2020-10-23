import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'
import {Link, useHistory} from 'react-router-dom'
import '../styles/Nav.css'
import {connect} from 'react-redux'   


const Nav = ({name, price, rank, id}) =>{
    const [movies, setMovies] = useContext(MovieContext)
    const history = useHistory();
    const handleClick = () => {
        history.push("/");
      }


    return(
    <div className = 'Nav'>
    <p>Список фильмов</p>
    <p>Количество фильмов в списке: {movies.length}</p>
    <button className = 'exitBtn' onClick = {handleClick}>Выход</button>
    </div>
    )
}

export default Nav