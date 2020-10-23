export const AddMovie = (name, price, rank, id) =>{
    return {
        type: 'ADD_MOVIE',
        name, price, rank, id
    }
}