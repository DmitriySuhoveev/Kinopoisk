import React, {useState, useContext} from 'react'
import {MovieContext} from '../MovieContext/MovieContext'
import './AddMovie.css'

const AddMovie = () =>{
    const [movies, setMovies] = useContext(MovieContext)
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [rank, setRank] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState ('');

    const updateName = (e) =>{
        setName(e.target.value)
    }
    const updatePrice = (e) =>{
        setPrice(e.target.value)
    }
    const updateRank = (e) =>{
        setRank (e.target.value)
    }
    const updateDescription = (e) =>{
        setDescription(e.target.value)
    }

    const addMovie = e =>{
        if(name === '' || price === '' || rank === '' || description === ''){
            e.preventDefault();
            alert('Заполните поля');
        } else{
            e.preventDefault();
            setMovies(prevMovies => [...prevMovies, {name: name, price: price, rank:rank, description:description, id: id}])
            
        }

    }

    return(
        <form className="form" onSubmit={addMovie}>
        <p>Название фильма</p>
            <input type ="text" name = "name" autoComplete = "off" value = {name} onChange={updateName}/>
            <p>Бюджет($)</p>
            <input type ="number" name = "price" autoComplete = "off" min ="0"  value = {price} onChange={updatePrice}/>
            <p>Рейтинг</p>
            <input type = "number" name = "rank" autoComplete = "off" min="0" max ="10"  value = {rank} onChange = {updateRank}/>
            <p>Описание</p>
            <input type = "text" name = "description" autoComplete = "off" maxLength="600" value = {description} onChange={updateDescription}/>
            <button className = 'addBtn'>Добавить</button>
        </form>
    )
}

export default AddMovie