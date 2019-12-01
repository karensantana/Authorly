//Importing actions types
import { 
    SELECTED_SORTING_ORDER, 
    SELECTED_SORTING_KEY, 
    SEARCH_BY_TITLE,
    SELECTED_ROWS_PER_PAGE,
    SELECTED_PAGE
 } from '../actions/actionTypes';

const initialState = {
    sortingOrder: 'asc',
    sortingKey: 'date',
    searchTitle: '',
    page: 0,
    rowsPerPage: 5   
}

export function sortingFilterReducer (state= initialState, action) {
    switch (action.type) {
        case SELECTED_SORTING_ORDER:
            return Object.assign({}, state, {
                sortingOrder: action.payload
            });
        case SELECTED_SORTING_KEY: 
            return Object.assign({}, state, {
                sortingKey: action.payload
            });
        case SEARCH_BY_TITLE:
            return Object.assign({}, state, {
                searchTitle: action.payload
            });
        case SELECTED_PAGE:
            return Object.assign({}, state, { 
                page: action.payload
            });
        case SELECTED_ROWS_PER_PAGE:
            return Object.assign({}, state, {
                rowsPerPage: action.payload   
            })
        default:
            return state;
    }
}