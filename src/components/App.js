import React from 'react';
import AuthorList from '../containers/AuthorList';
import SearchTerm from '../containers/SearchTerm';
import VisibleTableList from '../containers/VisibleTableList';

const App = () => {
    return (
        <div>
            <SearchTerm />
            <AuthorList />
            <VisibleTableList />
        </div>
    )
}

export default App;