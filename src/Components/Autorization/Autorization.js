import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './Autorization.css'
const Autorization = () =>{
    const history = useHistory();
    const [data, setData]= useState([
      {
        email: '',
        password: '',
        redirect: false
      }
    ]);

    const handleClick = () => {
        history.push("/Main");
      }
    
    
    const onChange = (e) =>{
    e.preventDefault()
    const newData = Object.assign({}, data)
    newData[e.target.name] = e.target.value
    setData(newData);
    }


    const onSumbit = (e) =>{
      e.preventDefault()
      if (data.email === 'Dima' && data.password === 'Suhoveev'){
        setData(data.redirect = true)
        handleClick();
      }
      else{
          alert("Введите правильные данные")
      }
      }

    
  
    return(
      <form className = "form-3" onSubmit = {onSumbit}>
      <p className = "clearfix">
        <label htmlFor = 'email'>Email:</label>
        <input type = 'text' name = 'email' placeholder ="Email" autoComplete= 'off' onChange ={onChange} />
        </p>
        <p className = "clearfix">
        <label htmlFor ="password">Password:</label>
        <input type = 'password' name = 'password' placeholder ="Password"  autoComplete= 'off' onChange ={onChange}/>
        </p>
        <p className = "clearfix">
        <button className = 'submitBtn' type ="submit">Sumbit</button>
        </p>
      </form>
    )
    }

export default Autorization;