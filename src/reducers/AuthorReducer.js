import { SELECTED_AUTHOR } from '../actions/actionTypes';

const initialState = {
    authorsList: [
        { firstName: 'Diane', lastName: 'Doe', email: 'diane@gmail.com' },
        { firstName: 'Karen', lastName: 'Santana', email: 'ksantana@gmail.com' },
        { firstName: 'Vicent', lastName: 'Garrido', email: 'vgarrido@gmail.com' },
        { firstName: 'Marreid', lastName: 'Conor', email: 'mconor@gmail.com' },
        { firstName: 'Fergal', lastName: 'Darcy', email: 'darcyfergal@gmail.com' }
    ],
    selectedAuthor: null
}

export function authorReducer (state = initialState, action) {
    switch (action.type) {
        case SELECTED_AUTHOR:
            return Object.assign({}, state, {
                selectedAuthor: action.payload
              })
        default:
            return state;
    }
}



