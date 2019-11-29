import { SELECTED_AUTHOR, SELECTED_SORTING_ORDER, SELECTED_SORTING_KEY } from './actionTypes';


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

