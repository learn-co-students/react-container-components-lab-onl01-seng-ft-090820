  
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AoRSPg2Rl5nzEAFPKnkxHUeuRsNxfTrO';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?`
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    constructor(){ 
        super()
        this.state = {
            searchTerm: '',
            reviews: []  
        }
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.search)
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => 
            this.setState(previousState => {
               return {  ...previousState,
                reviews: data.results
                }
            })
        )
    }

    render() {
        return (
            <div className="searchable-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="search" onChange={this.handleChange} value={this.state.search} />
                <input type="submit" />
            </form> 
            
            <div className='searchable-movie-reviews'><MovieReviews reviews={this.state.reviews} /></div>
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer;