import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateSeasons extends Component {
    constructor(props) {
        super(props);

        this.onChangeMoviename = this.onChangeMoviename.bind(this);
        this.onChangeSeasonNo = this.onChangeSeasonNo.bind(this);
        this.onChangeLinks = this.onChangeLinks.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            moviename: '',
            seasonno: '',
            links: '',
            movies: []
        }
    }
    componentDidMount() {
        axios.get('https://cricflix.herokuapp.com/movies/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        movies: response.data.map(movie => movie.moviename),
                        moviename: response.data[0].moviename
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeMoviename(e) {
        this.setState({
            moviename: e.target.value
        })
    }

    onChangeSeasonNo(e) {
        this.setState({
            seasonno: e.target.value
        })
    }

    onChangeLinks(e) {
        this.setState({
            links: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const season = {
            moviename: this.state.moviename,
            seasonno: this.state.seasonno,
            links: this.state.links,
        }

        console.log(season);

        axios.post('https://cricflix.herokuapp.com/seasons/add', season)
            .then(res => console.log(res.data));

        window.location = '/dashboard';
    }

    render() {
        return (
            <div>
                <h3>Add New Season</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Movie/Series Name: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.moviename}
                            onChange={this.onChangeMoviename}>
                            {
                                this.state.movies.map(function (movie) {
                                    return <option
                                        key={movie}
                                        value={movie}>{movie}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Season #: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.seasonno}
                            onChange={this.onChangeSeasonNo}
                        />
                    </div>
                    <div className="form-group">
                        <label>Links: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.links}
                            onChange={this.onChangeLinks}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Add New Season" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}