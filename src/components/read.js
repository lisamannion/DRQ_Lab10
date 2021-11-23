import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

// Read component class
export class Read extends React.Component {
    // Constructor
    constructor() {
        super()
        // When we make an instance of this class we are binding to this instance of reloadData
        this.ReloadData = this.ReloadData.bind(this)
    }
    state = {
        movies: []
    };

    // LIFECYCLE HOOK - Triggered everytime read component is active on the view
    componentDidMount() {
        // HTTP get call - Get the data from the API (server.js) and set it equal to state
        axios.get('http://localhost:4000/api/movies')
            .then((response) => { // If successful - assign it to state
                this.setState({ movies: response.data })
            })
            .catch((error) => { // If an exception happens on server and data is not retrieved
                console.log(error);
            });
    }

    // Data reload
    ReloadData() {
        // HTTP get call - Get the data from the API (server.js) and set it equal to state
        axios.get('http://localhost:4000/api/movies')
            .then((response) => { // If successful - assign it to state
                this.setState({ movies: response.data })
            })
            .catch((error) => { // If an exception happens on server and data is not retrieved
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>This is my read component.</h1>
                {/* Passing data and methods to the component */}
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}