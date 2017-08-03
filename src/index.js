import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAGZcXoTqwxZfE1lA5kIfElcNGA8it6oXQ';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('.container'))
