import React from 'react';
import MovieItem from './movieItem';

class Movies extends React.Component
{
    render(){
        return this.props.movies.map((movie)=>{
            // ReloadData is now passed in
            return <MovieItem movie ={movie} ReloadData={this.props.ReloadData}></MovieItem>
        })
    }
}
export default Movies;