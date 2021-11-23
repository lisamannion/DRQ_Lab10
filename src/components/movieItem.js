import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// MovieItem class
export class MovieItem extends React.Component {
    // Constructor
    constructor() {
        super()

        // When we make an instance of this class we are binding to this instance of delete movie
        this.DeleteMovie = this.DeleteMovie.bind(this)
    }

    // Delete movie function
    DeleteMovie(e) {
        // Stops this event getting called everytime the page reloads - prevents multiple deletions
        e.preventDefault()

        console.log("Delete " + this.props.movie._id)

        // Delete the movie using axios delete
        axios.delete("http://localhost:4000/api/movies/" + this.props.movie._id)
            .then(() => {
                this.props.ReloadData()
            })
            .catch()
    }

    render() {
        return (
            <div>
                {/* <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster} width="200" height="200"></img> */}
                {/* Card template for displaying each movie */}
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster}></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* Changing the link id in the URL to include the _id of the Database document when button is pressed */}
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit Movie</Link>
                    {/* Delete button */}
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>

            </div>
        );
    }
}