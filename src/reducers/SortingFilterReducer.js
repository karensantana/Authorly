import { SELECTED_SORTING_ORDER, SELECTED_SORTING_KEY, SEARCH_BY_TITLE } from '../actions/actionTypes';

const initialState = {
    sortingOrder: 'ASC',
    sortingKey: 'TITLE',
    searchTitle: ''
}

export function sortingFilterReducer (state= initialState, action) {
    switch (action.type) {
        case SELECTED_SORTING_ORDER:
            return Object.assign({}, state, {
                selectedAuthor: action.payload
            });
        case SELECTED_SORTING_KEY: 
            return Object.assign({}, state, {
                selectedAuthor: action.payload
            });
        case SEARCH_BY_TITLE:
            return Object.assign({}, state, {
                searchTitle: action.payload
            });
        default:
            return state;
    }
}