import { GET_USER, NEW_USER } from '../constants/user';

const initialState = {
    isLogged: true,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            
            break;
        case NEW_USER: 

            break;

        default:
            return state;
    }
} 


