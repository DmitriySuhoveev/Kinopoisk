import React from 'react'
import Nav from '../Nav/Nav'
import AddMovie from '../AddMovie/AddMovie'
import Movie from '../Movie/Movie'
import MovieSearch from '../MovieSearch/MovieSearch'


const Main = ()=> {
    return(
        <div>
        <Nav>
            <MovieSearch/>
        </Nav>
        <AddMovie/>
        <Movie/>
        </div>
    )
}

export default Main