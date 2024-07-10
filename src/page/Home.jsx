import React, { useEffect, useState } from 'react';
import '../css/home.css';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Movielist from '../components/Movielist';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=62068813c6fffb6c407d3833d5c2580d&append_to_response=videos&language=ko-KR&page=1`
      );
      console.log(response);
      setPopularMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="poster">
        <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
          {popularMovies.map((movie) => (
            <Link style={{ textDecoration: 'none', color: '#fff' }} to={`/movie/${movie.id}`}>
              <div className="posterImage" key={movie}>
                <img src={IMG_BASE_URL + movie.poster_path} alt="영화포스터"></img>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">{movie ? movie.original_title : ''}</div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ''}
                    <span className="posterImage__rating">
                      <i className="fas fa-star" /> {movie ? movie.vote_average : ''}
                    </span>
                  </div>
                  <div className="posterImage__description">{movie ? movie.overview : ''}</div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <Movielist />
      </div>
    </>
  );
}
