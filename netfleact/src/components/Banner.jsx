import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../requests'

const Banner = props => {
    const [movie, setMovie] = useState([]);

    // useEffect(callback, dependency array) hook
    useEffect(() => {
        fetch(requests.fetchNetflixOriginals)
            .then(Response => Response.json())
            .then(data => {
                const rand_0_19 = Math.floor(Math.random() * 19);
                const movies = data.results;
                setMovie(movies[rand_0_19]);
            });
    }, []);

    return (
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: 'center center',
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.name || movie?.original_name}</h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h2 className="banner__description">
                    {movie?.overview}
                </h2>
            </div>

            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner