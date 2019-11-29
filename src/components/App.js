import React from 'react';
import AuthorList from './AuthorList';
import VisibleTableList from '../containers/VisibleTableList';

const App = () => {
    return (
        <div>
            <AuthorList />
            <VisibleTableList />
        </div>
    )
}

export default App;