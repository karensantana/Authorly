import { combineReducers } from 'redux';
import { authorReducer } from './AuthorReducer';
import { publicationReducer } from './PublicationReducer';
import { sortingReducer } from './SortingReducer';

const rootReducer = combineReducers({
    authors: authorReducer,
    publications: publicationReducer,
    sortings: sortingReducer
});

export default rootReducer;