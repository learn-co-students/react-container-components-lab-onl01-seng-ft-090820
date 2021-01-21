// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {

    return (
        <div className="review-list">
            {reviews.map(review => {
                return (
                    <div key={review.display_title} className="review">
                        <ul>{review.display_title}</ul>
                        <li><a href={review.link.url} alt={review.display_title}>{review.headline}</a></li>
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