import { LOGIN_USER, LOGIN_SUCCESS, LOGOUT_USER, LOGOUT_USER_SUCCESS, API_ERROR,MAKE_USER_LOGGED_IN } from './actionTypes';

const initialState = {
    error: "",
    loading: false,
    UserLoggedIn : false 

}

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            state = {
                ...state,
                loading: true
            }
            break;
        case LOGIN_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case LOGOUT_USER:
            state = { ...state };
            break;
        case LOGOUT_USER_SUCCESS:
            state = { ...state };
            break;
        case API_ERROR:
            state = { ...state, error: action.payload, loading: false };
            break;
        case MAKE_USER_LOGGED_IN : 
        state = { ...state , UserLoggedIn : true}
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default login;