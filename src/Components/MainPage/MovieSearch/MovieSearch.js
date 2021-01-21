import React from 'react'
import MovieSearchNav from './MovieSearchNav/MovieSearchNav'
import MovieSearchSearchBar from './MovieSearchSearchBar/MovieSearchSearchBar'
import MovieSearchContent from './MovieSearchContent/MovieSearchContent'
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