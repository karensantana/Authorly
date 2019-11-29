import { createSelector } from 'reselect'

const getPublications = state => state.publications
const getSortingKey = state => state.sortings.sortingKey
const getSortingOrder = state => state.sortings.sortingOrder

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

export const getSortedPublications = createSelector(
    [getPublications, getSortingKey, getSortingOrder],
    (publications, sortingKey, sortingOrder) => {
           
        switch (sortingKey) {
            case 'DATE':
                if( sortingOrder == 'ASC') {
                  return publications.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0)); 
                }
                else {
                    return publications.sort((a,b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0));  
                }
            case 'TITLE':
                if( sortingOrder == 'ASC') {
                    return publications.sort(compare); 
                }
                else {
                    return publications.sort((a,b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0));  
                }
            default:
                
                
        }
    }
)