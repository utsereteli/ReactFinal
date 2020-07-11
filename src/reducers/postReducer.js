import {
    FETCH_POSTS,
    NEW_POST,
    DELETE_POST,
    EDIT_POST,
    FETCH_SINGLE_POST
} from '../actions/types';

const initialState = {
    items: [],
    item: {}
}


export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return state
        case DELETE_POST:
            return state
        case EDIT_POST:
            return state
        case FETCH_SINGLE_POST:
            return {
                ...state,
                item:action.payload
            }
        default:
            return state
    }
}