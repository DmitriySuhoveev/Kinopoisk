import React, {useState, useContext} from 'react'
import {MovieContext} from '../MovieContext/MovieContext'
import './AddMovie.css'

const AddMovie = () =>{
    const [movies, setMovies] = useContext(MovieContext)
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState ('');

    const updateName = (e) =>{
        setName(e.target.value)
    }
    const updateTime = (e) =>{
        setTime(e.target.value)
    }
    const updateDate = (e) =>{
        setDate (e.target.value)
    }
    const updateDescription = (e) =>{
        setDescription(e.target.value)
    }

    const addMovie = e =>{
        if(name === '' || time === '' || date === '' || description === ''){
            e.preventDefault();
            alert('Заполните поля');
        } else{
            e.preventDefault();
            setMovies(prevMovies => [...prevMovies, {name: name, time: time, date: date, description: description, id: id}])
            
        }

    }

    return(
        <form className="form" onSubmit={addMovie}>
        <p>Название фильма</p>
            <input type ="text" name = "name" autoComplete = "off" value = {name} onChange={updateName}/>
            <p>Время сеанса</p>
            <input type ="text" name = "time" autoComplete = "off" value = {time} onChange={updateTime}/>
            <p>Дата проката</p>
            <input type = "text" name = "date" autoComplete = "off" value = {date} onChange = {updateDate}/>
            <p>Описание</p>
            <input type = "text" name = "description" autoComplete = "off" maxLength="600" value = {description} onChange={updateDescription}/>
            <button className = 'addBtn'>Добавить</button>
        </form>
    )
}

export default AddMovie