import React from 'react';
import { moviedata } from '../movieData';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function Movie() {
  return (
    <div className="app-container">
      {moviedata.results.map((v, i) => (
        <div className="movie-container" key={i}>
          <img src={IMG_BASE_URL + v.poster_path} alt="영화포스터" />
          <div className="movie-info">
            <h4>{v.title}</h4>
            <span>{v.vote_average}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
