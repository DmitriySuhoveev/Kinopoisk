import React from 'react';
import Main from './Components/MainPage/Main/Main'
import Autorization from './Components/Autorization/Autorization'
import AddMovie from './Components/MainPage/AddMovie/AddMovie'
import {MovieProvider} from './Components/MainPage/MovieContext/MovieContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <Router>
    <MovieProvider>
      <div>
      <Switch>
        <Route path exact = '/' component = {Autorization}/>
          <Route path = '/Main' component = {AddMovie}>
            <Main/>
          </Route>
        </Switch>
       
      </div>
    </MovieProvider>
    </Router>
  );
}


export default App;
