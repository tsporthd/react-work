import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_lists';

const API_KEY = 'AIzaSyCyCiygukK1rDBBGHoPu3VDc2Mr3QLxPQs';
const youTubeSearch = 'surfing';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};
        YTSearch({key: API_KEY, youTubeSearch},(videos) => {
           this.setState( {videos});
        });

    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}
