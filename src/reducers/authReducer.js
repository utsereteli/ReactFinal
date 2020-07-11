import {
    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/types';

const initialState = {
    authenticatedUser: {},
    authenticated: false,
    error: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                authenticatedUser: action.payload,
                authenticated: action.error.length === 0 ? true : false,
                error: action.error
            }
        case REGISTER_USER:
            return {
                ...state,
                authenticatedUser: action.payload,
                authenticated: action.error.length === 0 ? true : false,
                error: action.error
            }
        case LOGOUT_USER:
            return {
                ...state,
                authenticated: false
            }
        default:
            return state
    }
}