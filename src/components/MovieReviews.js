import React from 'react'

const MovieReviews = (props) => {
    return (
    <div className='review-list'> 
        {props.reviews.map(review => {
            return (
                <div className="review" key={review.display_title}>
                    <ul>
                        <li>{review.display_title}</li>
                        <li>Directed By: {review.byline}</li>
                        <li>Summary: {review.summary_short}</li>
                    </ul>
                </div>
            )
        })}
    </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews