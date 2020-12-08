export const authorizationReducer = (state = {loggedIn: false}, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state
            }

            case "LOG_OUT":
                return{
                    ...state,
                    loggedIn: true
                }
        default: 
            return state;
    }
};
