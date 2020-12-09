import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {deleteItem} from '../../../Redux/Actions';
import AccordionMovie from '../AccordionMovie/AccordionMovie';
import './Movie.css'
const Movie = () =>{
    const dispatch = useDispatch();
    const moviesManage = useSelector(state => state.moviesManage)
    const handleRemove = (id) => {
        dispatch(deleteItem(id))
    }

    return(
    <div className = 'movieDiv'>
    <ul className = 'rectangle'>
        {moviesManage.map((item) => (
            <div key = {item.id} className = 'movieList'>
              <div><img  className = "poster" src={item.img} alt =''></img></div>
              <li>Название: {item.name}</li>
              <li>Время сеанса: {item.time}</li>
              <li>Дата проката: {item.date}</li>
              <AccordionMovie name = {item.name} description = {item.description}/>
        <button className = 'deleteBtn' onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
    ))}
    </ul>
    </div>
    )
}

export default Movie