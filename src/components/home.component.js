import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Season = props => (
    <tr>
        <td>{props.season.moviename}</td>
        <td>{props.season.seasonno}</td>
        <td>{props.season.links}</td>
        <td>
            <Link to={"/edit/" + props.season._id}>edit</Link> | <a href="#" onClick={() => { props.deleteSeason(props.season._id) }}>delete</a>
        </td>
    </tr>
)

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.deleteSeason = this.deleteSeason.bind(this)

        this.state = { seasons: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/seasons/')
            .then(response => {
                this.setState({ seasons: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteSeason(id) {
        axios.delete('http://localhost:5000/seasons/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            seasons: this.state.seasons.filter(el => el._id !== id)
        })
    }

    seasonList() {
        return this.state.seasons.map(currentseason => {
            return <Season season={currentseason} deleteSeason={this.deleteSeason} key={currentseason._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Seasons</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Movie Name</th>
                            <th>Season #</th>
                            <th>Links</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.seasonList()}
                    </tbody>
                </table>
            </div>
        )
    }
}