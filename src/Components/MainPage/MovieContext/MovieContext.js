import React, {useState, createContext} from 'react'    

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
    

    
    return (
        <div >
            <MovieContext.Provider value ={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}
