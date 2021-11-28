import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export class MovieItem extends React.Component{

    constructor(){
        super();

        // DeleteMovie method is bound here
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    // This is the method for deleting movies
    DeleteMovie(e){
        e.preventDefault();
        console.log("Delete " + this.props.movie._id);

        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(()=>{
            // This ReloadData method comes from the read component
            this.props.ReloadData();
        })
        .catch();
    }

    render(){
        return(
            <Card>
                <Card.Header>{this.props.movie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className ="blockquote mb-0">
                        <p><img src={this.props.movie.Poster} width="360" height = "360" alt="Image was not found at source!"></img></p>
                        <footer className="blockquote-footer">
                            {this.props.movie.Year}
                        </footer>
                    </blockquote>
                </Card.Body>
                {/*This is where the link for the edit component is placed */}
                <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
            </Card>
        );
    }
}

export default MovieItem;