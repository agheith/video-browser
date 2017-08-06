import React, { Component } from 'react';
// { Component } pulls off the Component property from the React library

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term: ''};
    }
    render(){
        return (
        <div className="search-bar">
            <input
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
        </div>
        )
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;
