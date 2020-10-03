import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'
import '../styles/AddMovie.css'

const AddMovie = () =>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [rank, setRank] = useState('');
    const [id, setId] = useState ('');
    const [movies, setMovies] = useContext(MovieContext)

    const updateName = (e) =>{
        setName(e.target.value)
    }
    const updatePrice = (e) =>{
        setPrice(e.target.value)
    }
    const updateRank = (e) =>{
        setRank (e.target.value)
    }

    const addMovie = e =>{
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price, rank:rank, id: id}])
    }


    return(
        <form className="form" onSubmit={addMovie}>
        <p>Название фильма</p>
            <input type ="text" name = "name" autoComplete = "off" value ={name} onChange={updateName}/>
            <p>Цена</p>
            <input type ="text" name = "price" autoComplete = "off" value = {price} onChange={updatePrice}/>
            <p>Рейтинг</p>
            <input type = "text" name = "rank" autoComplete = "off" value = {rank} onChange = {updateRank}/>
            <button className = 'addBtn'>Добавить</button>
        </form>
    )
}

export default AddMovie