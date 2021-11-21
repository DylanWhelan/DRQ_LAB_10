import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class MovieItem extends React.Component{

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
            </Card>
        );
    }
}

export default MovieItem;