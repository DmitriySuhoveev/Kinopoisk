import React from 'react';
import MovieSearchNav from './MovieSearchNav/MovieSearchNav';
import MovieSearchSearchBar from './MovieSearchSearchBar/MovieSearchSearchBar';
import './MovieSearch.css'

const MovieSearch = () =>{
   
    return(
        <div className ='MovieSearchRootDiv'>
        <MovieSearchNav/>
        <MovieSearchSearchBar/>
        </div>
    )
}
export default MovieSearch