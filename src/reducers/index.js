import { combineReducers } from 'redux';
import { authorReducer } from './AuthorReducer';
import { publicationReducer } from './PublicationReducer';
import { sortingFilterReducer } from './SortingFilterReducer';

const rootReducer = combineReducers({
    authors: authorReducer,
    publications: publicationReducer,
    dataOrderParameters: sortingFilterReducer
});

export default rootReducer;