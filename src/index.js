import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAGZcXoTqwxZfE1lA5kIfElcNGA8it6oXQ';


class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch ({ key: API_KEY, term: 'Soccer'}, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'))
