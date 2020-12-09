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

let addID = 2;
export const movieAppend = (img, name, time, date, description)=>{
    return{
        type: "ADD_MOVIE",
        img, name, time, date, description, id: ++addID
    }
}

export const deleteItem = (id) =>{
    return {
        type: 'DELETE_ITEM',
        id
    }
}