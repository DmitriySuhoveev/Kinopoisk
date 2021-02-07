import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { setUser, logOut } from '../../Redux/Actions';
import { useSelector, useDispatch } from 'react-redux';
import fire from '../../utilities/firebaseConfig'
import './Autorization.css';

const Autorization = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const authorizationReducer = useSelector(state => state.authorizationReducer);
    const [data, setData]= useState([
      {
        email: '',
        password: '',
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

    const signUp = (e) =>{
      e.preventDefault()
      fire.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((u) => {
        alert('Successfully Signed Up');
        dispatch(logOut());
        handleClick();
      })
      .catch((err) => {
        alert('Error: ' + err.toString());
        dispatch(setUser())
      })
    }

    const onSumbit = (e) =>{
     e.preventDefault()
      fire.auth().signInWithEmailAndPassword(data.email, data.password)
      .then((u) => {
        alert('Successfully Logged In');
        dispatch(logOut())
        handleClick();
      })
      .catch((err) => {
        alert('Error: ' + err.toString());
        dispatch(setUser())
      })
      }
  
    return(
    <div className='AuthorizationDiv'>
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
        <button className = 'submitBtn'>Sign In</button>
        <button className = 'signUp' onClick={signUp}>Sign Up</button>
        </p>
      </form>
      </div>
    )
    }

export default Autorization