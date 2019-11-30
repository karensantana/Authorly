import { SELECTED_AUTHOR, SELECTED_SORTING_ORDER, SELECTED_SORTING_KEY, SEARCH_BY_TITLE } from './actionTypes';

export function searchByTitle (title) {
    return {
        type: SEARCH_BY_TITLE,
        payload: title
    }
}

export function selectedAuthor (author) {
    return {
        type: SELECTED_AUTHOR,
        payload: author
    }
}

export function selectedSortingKey (sortingKey) {
    return {
        type: SELECTED_SORTING_KEY,
        payload: sortingKey
    }
}

export function selectedSortingOrder (sortingOrder) {
    return {
        type: SELECTED_SORTING_ORDER,
        payload: sortingOrder
    }
}

