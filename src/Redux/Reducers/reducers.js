const movies = [
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
    }]

 const movieContextReducer = (state = movies, action) =>{
    switch(action.type){
        case 'ADD_MOVIE':
        return [...state, {
            name: action.name,
            price: action.price,
            rank: action.rank,
            id: action.id
        }]
        default:
            return state;
    }
 }

 export default movieContextReducer;