import axios from 'axios';
import React from 'react';
import Movies from "./movies";

class Read extends React.Component
{
    // movies are no longer hardcoded and are now grabbed from json link displayed below
    state = {
        movies: [
            ]            
    }

    // Once the component has been inserted into DOM, the movies json array is populated using axios
    componentDidMount() {
        // The url has been changed to that of the local host
       axios.get('http://localhost:4000/api/movies')
        .then((response) => {
            // This has been changed to accept input from the mongodb server by removing the movies, and setting it to just response.data
            this.setState({ movies: response.data })
        })
        .catch(function( error) {
            console.log(error);
        })
    }

    render(){
        return(
            <div>
                <h3>This is the Read component!</h3>
                <Movies movies = {this.state.movies}></Movies>
            </div>
        )
    }
}
export default Read;