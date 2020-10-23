import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'
import {connect} from 'react-redux'
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
        if(name === '' || price === '' || rank === ''){
            e.preventDefault();
            alert('Заполните поля');
        } else{
            e.preventDefault();
            setMovies(prevMovies => [...prevMovies, {name: name, price: price, rank:rank, id: id}])
            
        }

    }


    return(
        <form className="form" onSubmit={addMovie}>
        <p>Название фильма</p>
            <input type ="text" name = "name" autoComplete = "off" value = {name} onChange={updateName}/>
            <p>Цена</p>
            <input type ="number" name = "price" autoComplete = "off"  value = {price} onChange={updatePrice}/>
            <p>Рейтинг</p>
            <input type = "number" name = "rank" autoComplete = "off" min="0" max ="10"  value = {rank} onChange = {updateRank}/>
            <button className = 'addBtn'>Добавить</button>
        </form>
    )
}

export default AddMovie