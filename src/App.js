import React from 'react';
import Main from './Components/MainPage/Main/Main';
import Autorization from './Components/Autorization/Autorization';
import AddMovie from './Components/MainPage/AddMovie/AddMovie';
import TicketOrder from './Components/MainPage/TicketOrder/TicketOrder';
import MovieSearch from './Components/MainPage/MovieSearch/MovieSearch';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';



function App() {
  
  return (
    <Router>
      <div className='AppRootDiv'>
        <Switch>
          <Route path = '/' exact = {true} component = {Autorization}/>
          <Route path = '/TicketOrder' component = {TicketOrder}/>
          <Route path = '/MovieSearch' component = {MovieSearch}/>
          <Route path = '/Main' component = {AddMovie}>
            <Main/>
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}


export default App;
