import React from 'react';

const MovieReviews = (props) =>
    <div className="review-list">
        {props.movieList.map((movie, i) => {
            return (
                <div className="review" key={i}>
                    <ul>
                        <li>
                            {movie.display_title || "Untitled"}
                            <ul>
                                <li>
                                    Rating: {movie.mpaa_rating || "Not Yet Rated"}
                                </li>
                                <li>
                                    Directed By: {movie.byline}
                                </li>
                                <li>
                                    Summary: {movie.summary_short}
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            )
        })}
    </div>

export default MovieReviews;
