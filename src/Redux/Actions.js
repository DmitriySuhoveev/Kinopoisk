export const AddMovie = (name, price, rank, id) =>{
    return {
        type: 'ADD_MOVIE',
        payload: [name, price, rank, id]
    }
}

export const setUser = () =>{
    return{
        type: 'SET_USER',
    }
}

export const logOut = () =>{
    return{
        type: "LOG_OUT"
    }
}