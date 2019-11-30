import { createSelector } from 'reselect'

const getPublications = state => state.publications
const getSortingKey = state => state.dataOrderParameters.sortingKey
const getSortingOrder = state => state.dataOrderParameters.sortingOrder
const getAuthor = state => state.authors.selectedAuthor 
const getSearchByTitle = state => state.dataOrderParameters.searchTitle

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const titleA = a.title
    const titleB = b.title
  
    let comparison = 0;
    if (titleA > titleB) {
      comparison = 1;
    } else if (titleA < titleB) {
      comparison = -1;
    }
    return comparison;
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
                    return publication.author === author.email
                })
            );
        }
    }
);

export const getSortedPublications = createSelector(
    [getFilteredByAuthor, getSortingKey, getSortingOrder],
    (publications, sortingKey, sortingOrder) => {
           
        switch (sortingKey) {
            case 'DATE':
                if( sortingOrder === 'ASC') {
                  return publications.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0)); 
                }
                else {
                    return publications.sort((a,b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0));  
                }
            case 'TITLE':
                if( sortingOrder === 'ASC') {
                    return publications.sort(compare); 
                }
                else {
                    return publications.sort((a,b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0));  
                }
            default:
                
                
        }
    }
)