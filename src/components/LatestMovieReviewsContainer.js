import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'i2SvvY4wjh5qBERAmCPieAhVAtJhTg4t';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    componentDidMount(){
        fetch(URL)
            .then(resp => resp.json())
            .then(movieData => {
                this.setState({
                    reviews: movieData.results
                })
            })
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                Movie Review List:
                <MovieReviews movieList={this.state.reviews} />
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;

