// Code MovieReviews Here
import React from 'react'


const MovieReviews = (props) => {
   
    return (<div className='review-list'> {props.reviews.map(rev => <div className="review">
                <strong>{rev.display_title}</strong>
                <br></br>
                <a>{rev.url}</a>
                <br></br>
                <blockquote>{rev.summary_short}</blockquote>
            </div>
        )}
        </div>
    )
} 
export default MovieReviews;
