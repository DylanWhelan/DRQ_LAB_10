import axios from 'axios';
import React, { Component } from 'react';

class Edit extends Component
{

    constructor(){
        super();

        // All binds are created here
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        // State stored values are assigned here
        this.state ={
            Title:'',
            Year:'',
            Poster:''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.Title,
                Year:response.data.Year,
                Poster:response.data.Poster
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }

    // These are all event handlers used, to ensure that values can be entered into the form.
    onChangeTitle(e){
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }

    // This is the submit event handler which writes information to the console
    onSubmit(e){
        e.preventDefault();
        console.log("Button has been clicked. \nMovie: "+this.state.Title+"\nYear: "+this.state.Year+"\nPoster Url: "+this.state.Poster);

        // This is the movie object that is passed into the post
        const newMovie = {
            Title: this.state.Title,
            Year: this.state.Year,
            Poster: this.state.Poster,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
        .then(res =>{
            console.log(res.data);
        })
        .catch();
        // This is where the post is called and the movie object passed in
        /*axios.post('http://localhost:4000/api/movies',newMovie)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });*/
    }

    render(){
        return(
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    {/*This is the form for inputting film information, first area corresponds to title, second to years, and third to poster urls,
                    finally the button at the bottom will write the stored values to the console */}
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Title}
                        onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Year}
                        onChange={this.onChangeYear}></input>
                    </div>
                    <div className='form-group'>
                        <label>Movies Poster: </label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                        value='Edit Movie'
                        className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Edit;