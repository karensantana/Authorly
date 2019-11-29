import { SELECTED_SORTING_ORDER, SELECTED_SORTING_KEY } from '../actions/actionTypes';

const initialState = {
    sortingOrder: 'ASC',
    sortingKey: 'TITLE'
}

export function filterReducer (state= initialState, action) {
    switch (action.type) {
        case SELECTED_SORTING_ORDER:
            return Object.assign({}, state, {
                selectedAuthor: action.payload
            });
        case SELECTED_SORTING_KEY: 
            return Object.assign({}, state, {
                selectedAuthor: action.payload
            });
        default:
            return state;
    }
}