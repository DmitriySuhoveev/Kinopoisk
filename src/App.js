import React from 'react';
import MovieList from './Components/MovieList'
import Nav from './Components/Nav'
import Autorization from './Components/Autorization'
import AddMovie from './Components/AddMovie'
import {MovieProvider} from './Components/MovieContext'
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
            <Nav/>
            <AddMovie/>
            <MovieList/>
          </Route>
        </Switch>
       
      </div>
    </MovieProvider>
    </Router>
  );
}


export default App;
