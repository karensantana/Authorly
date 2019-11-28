import { combineReducers } from 'redux';
import { authorReducer } from './AuthorReducer';
import { publicationReducer } from './PublicationReducer';

const rootReducer = combineReducers({
    authors: authorReducer,
    publications: publicationReducer
});

export default rootReducer;