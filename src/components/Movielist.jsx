import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../css/movielist.css';
import { useParams } from 'react-router-dom';

export default function Movielist() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [type]);
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : 'popular'
      }?api_key=62068813c6fffb6c407d3833d5c2580d&append_to_response=videos&language=ko-KR`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
    console.log(setMovieList);
  };
  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : 'popular').toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
}
