import React from 'react'

const MovieReviews = ({ reviews }) => {

    return (
        <div className="review-list">
            {reviews.map(review => {
                return (
                    <div key={review.show_title} className="review">
                        <ul>{review.show_title}</ul>
                        <li><a href={review.link.url} alt={review.show_title}>{review.headline}</a></li>
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
