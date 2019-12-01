import { createSelector } from 'reselect'

const getPublications = state => state.publications
const getSortingKey = state => state.dataOrderParameters.sortingKey
const getSortingOrder = state => state.dataOrderParameters.sortingOrder
const getAuthor = state => state.authors.selectedAuthor 
const getSearchByTitle = state => state.dataOrderParameters.searchTitle

//Sorting function
function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}
const getFilteredByTitle = createSelector(
    [getSearchByTitle, getPublications],
    (searchByTitle, publications ) => {
        if (searchByTitle) {
            return (
                publications.filter( function (publication) {
                    return publication.title.toLowerCase().includes(searchByTitle.toLowerCase());
                })
            );   
        }
        else { 
            return publications;
        } 
    }
);
const getFilteredByAuthor = createSelector(
    [getAuthor, getFilteredByTitle],
    (author, publications) => {
        if (!author) {
            return publications;
        }
        else {
            return (
                publications.filter( function (publication) {
                    return publication.authorEmail === author.email
                })
            );
        }
    }
);

export const getSortedPublications = createSelector(
    [getFilteredByAuthor, getSortingKey, getSortingOrder],
    (publications, sortingKey, sortingOrder) => {
        switch (sortingKey) {
            case 'date':
                return publications.sort(sortingOrder === 'asc' ? 
                    (a,b) => { return new Date(a.date) - new Date(b.date) } : (a,b) => { return -new Date(a.date) - new Date(b.date)
                });;
            case 'authorEmail':
                return publications.sort(sortingOrder === 'desc' ? (a, b) => desc(a, b, sortingKey) : (a, b) => -desc(a, b, sortingKey)); 
            default:
                return publications;
        }
                   
    }
)