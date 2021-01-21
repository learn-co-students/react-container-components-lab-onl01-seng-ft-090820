import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleSearch = event => {
        let search = event.target.value
        this.setState({
          searchTerm: search
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        fetch(URL + this.state.searchTerm)
        .then(res => res.json())
        .then(data => this.setState({ reviews: data.results }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleOnSubmit}>
                <input
                id='search-input'
                type='text'
                onChange={this.handleSearch} />
                <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}