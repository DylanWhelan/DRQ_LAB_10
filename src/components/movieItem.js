import React from "react";
import { Card } from "react-bootstrap";

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
            </Card>
        );
    }
}

export default MovieItem;