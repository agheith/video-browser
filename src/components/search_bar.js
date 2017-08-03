import React, { Component } from 'react';
// { Component } pulls off the Component property from the React library

class SearchBar extends Component{
    render(){
        return (
            <input onChange={(event) => console.log(event.target.value)} />
        )
    }

}


export default SearchBar;
