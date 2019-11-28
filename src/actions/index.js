import { SELECTED_AUTHOR } from './actionTypes';

export function selectedAuthor (author) {
    return {
        type: SELECTED_AUTHOR,
        payload: author.email
    }
}

