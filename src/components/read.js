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
       axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
        .then((response) => {
            this.setState({ movies: response.data.movies })
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