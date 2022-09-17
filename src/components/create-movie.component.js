import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


export default class CreateMovies extends Component {
    constructor(props) {
        super(props);

        this.onChangeMoviename = this.onChangeMoviename.bind(this);
        this.onChangeMovieorSeries = this.onChangeMovieorSeries.bind(this);
        this.onChangecategory = this.onChangecategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            moviename: '',
            MovieorSeries: '',
            category: '',
        }
    }

    onChangeMoviename(e) {
        this.setState({
            moviename: e.target.value
        })
    }
    onChangeMovieorSeries(e) {
        this.setState({
            MovieorSeries: e.target.value
        })
    }
    onChangecategory(e) {
        this.setState({
            category: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const movie = {
            moviename: this.state.moviename,
            MovieorSeries: this.state.MovieorSeries,
            category: this.state.category,
        }

        console.log(movie);

        axios.post('http://localhost:5000/movies/add', movie)
            .then(res => console.log(res.data));

        this.setState({
            moviename: "",
            MovieorSeries: "",
            category: "",
        })
    }

    render() {
        return (
            <div>
                <h3>Add New Movie</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Movie/Series Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.moviename}
                            onChange={this.onChangeMoviename}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Movie/Series: </label>
                        <select type="text"
                            required
                            className="form-control"
                            value={this.state.MovieorSeries}
                            onChange={this.onChangeMovieorSeries}>
                            {
                                <option>Movie</option>
                            }
                            {
                                <option>Series</option>
                            }
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Category: </label>
                        <select type="text"
                            required
                            className="form-control"
                            value={this.state.category}
                            onChange={this.onChangecategory}>
                            {
                                <option>Action</option>
                            }
                            {
                                <option>Adventure</option>
                            }
                            {
                                <option>Animated</option>
                            }
                            {
                                <option>Comedy</option>
                            }
                            {
                                <option>Crime</option>
                            }
                            {
                                <option>Fantasy</option>
                            }
                            {
                                <option>Horror</option>
                            }
                            {
                                <option>Mystery</option>
                            }
                            {
                                <option>Sci-Fi</option>
                            }
                            {
                                <option>Romance</option>
                            }
                            {
                                <option>Thriller</option>
                            }
                            {
                                <option>Documentary</option>
                            }

                        </select>
                    </div>
                    <br />

                    <div className="form-group">
                        <input type="submit" value="Add New Movie/Series" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}