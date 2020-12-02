import React from 'react'
import Nav from '../Nav/Nav'
import AddMovie from '../AddMovie/AddMovie'
import Movie from '../Movie/Movie'
import MovieSearch from '../MovieSearch/MovieSearch'
import TicketOrder from '../TicketOrder/TicketOrder'

const Main = ()=> {
    return(
        <div>
        <Nav>
            <TicketOrder/>
            <MovieSearch/>
        </Nav>
        <AddMovie/>
        <Movie/>
        </div>
    )
}

export default Main