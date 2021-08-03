import React, { useState } from 'react';
import axios from "./axios";
import "./Row.css";
function Row({title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData() {
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results);
            return requests;
        }
        fetchData();
    }, [fetchUrl]);
    console.log(movies);
    return(
        <div className='row'>
            <h2>{title}</h2>
        {movies.map(movie => (
            <img
            className={`row_poster ${isLargeRow && "row_posterLarge"} `}
            key={movie.id}
             src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} alt="" />
        ))}
        </div>
    )
}

export default Row;
