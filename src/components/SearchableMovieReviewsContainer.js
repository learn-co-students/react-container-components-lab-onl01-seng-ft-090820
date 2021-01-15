import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// import fetch from 'node-fetch';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}&query=`


// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }
    
    handleInput = event => this.setState({ searchTerm: event.target.value })

    handleOnSubmit = event => {
        event.preventDefault()
        
        fetch(URL + this.state.searchTerm)
            .then(response => response.json())
            .then(movieData => this.setState({ reviews: movieData.results}))
        
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleOnSubmit}>
                <input
                    id='search-input'
                    type='text'
                    onChange={this.handleInput}
                />
                <button type='submit'>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
