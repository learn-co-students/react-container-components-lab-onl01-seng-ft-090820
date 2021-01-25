import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = (e) => {
        this.setState = ({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({reviews: data.results})
        })
    }

    render() {
        return (
            <div className="searchable-reviews"> 
                <form onSubmit={this.handleSubmit}>
                    <label> Search Movie Reviews </label>
                    <br/>
                    <input type="text" onChange={this.handleChange} value={this.state.search} />
                    <input type="submit" value="Go"/>
                </form>
                <div className='searchable-movie-reviews'><MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer