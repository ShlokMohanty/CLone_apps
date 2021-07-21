import React from 'react';
const Movie = (props) => (
    <div className="movie">
        <div onClick={props.movieDetails} className="movie_column-poster">
            <img src={props.movieImage} alt="" className="movie_poster" />
        </div>
    </div>
);
export default Movie;
