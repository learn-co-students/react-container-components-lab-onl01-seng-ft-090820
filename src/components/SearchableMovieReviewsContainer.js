import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '&api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?order=by-title`;

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = event => {
        this.setState ({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL + `&query=${event.target[0].value}` + NYT_API_KEY)
            .then(resp => resp.json())
            .then(data => {
                this.setState({reviews: data.results})
                
            })
    }

    render() {
        return (
            <div>
                Search:
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.searchTerm}
                    />
                    <input type="submit" />
                </form>
                <MovieReviews movieList={this.state.reviews} />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;

