import React, {Component} from 'react';

const API_KEY = 'AIzaSyCyCiygukK1rDBBGHoPu3VDc2Mr3QLxPQs';

import SearchBar from './search_bar';


export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}
