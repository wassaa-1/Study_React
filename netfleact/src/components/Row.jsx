import React, { useEffect, useState } from 'react'
import './Row.css'

const base_URL = 'https://image.tmdb.org/t/p/original/';

const Row = props => {
    const [movies, setMovies] = useState([]);
    // API call
    useEffect(() => {
        fetch(props.fetchUrl)
            .then(response => response.json())
            .then(data => {
                const movies = data.results;
                setMovies(movies);
            });
    }, []);

    return (
        <div className='row'>
            <h2>{props.title}</h2>

            <div className='row__posters'>
                {movies.map(movie =>
                    <img
                        key={movie.id}
                        className={`row__poster ${props.isLargeRow && `row__posterLarge`}`}
                        src={`${base_URL}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />)
                }
            </div>
        </div>
    )
}

export default Row