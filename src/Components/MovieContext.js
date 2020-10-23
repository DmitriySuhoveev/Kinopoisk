import React, {useState, createContext} from 'react'
import {connect} from 'react-redux'
import '../styles/Movie.css'

 export const MovieContext = createContext();

 export  const MovieProvider = (props) =>{
    const [movies, setMovies] = useState([
        {
            name: 'Криминальное чтиво',
            price: '$1000',
            rank: 2,
            id: 0
        },
        {
            name: 'Титаник',
            price: '$2000',
            rank: 3,
            id: 1
        },
        {
            name: 'Зеленая миля',
            price: '$3000',
            rank: 4,
            id: 2
        }
    ]);
    
    function handleRemove(id){
        const newList = movies.filter((item) => item.id !== id)
        setMovies(newList)
    }
    return (
        <div >
            <MovieContext.Provider value ={[movies, setMovies]}>
                {props.children}
                <div className ="movieDiv">
                <ul className = 'rectangle'>
                    {movies.map((item) => (
                    <li key={item.id}>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.rank}</li>
                        <button className="delete-btn" type="button" onClick={() => handleRemove(item.id)}>
                        Remove
                        </button>
                    </li>
      ))}
    </ul>
    </div>
            </MovieContext.Provider>
        </div>
    )
}
