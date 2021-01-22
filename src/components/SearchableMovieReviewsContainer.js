import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'E6OjAPv5n0abFH9SZsyZExSmPp8YXqcz';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super();
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleInputChange = event =>
        this.setState({ searchTerm: event.target.value });

    handleSubmit = event => {
        event.preventDefault();

        fetch(URL.concat(this.state.searchTerm))
            .then(res => res.json())
            .then(data => {
                this.setState({
                    reviews: data.reviews
                })
            })
    }


    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInputChange} />
                    <input type="submit" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
