import React, { useEffect, useState } from 'react';
import '../css/moviedetail.css';
import { useParams } from 'react-router-dom';

export default function Moviedetail() {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=62068813c6fffb6c407d3833d5c2580d&append_to_response=videos&language=ko-KR`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };
  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ''}`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ''}`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ''}</div>
            <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ''}</div>
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ''} <i className="fas fa-star" />
              <span className="movie__voteCount">
                {currentMovieDetail ? '(' + currentMovieDetail.vote_count + ') 평점' : ''}
              </span>
            </div>
            <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + ' 분' : ''}</div>
            <div className="movie__releaseDate">
              {currentMovieDetail ? '개봉날짜: ' + currentMovieDetail.release_date : ''}
            </div>
            <div className="movie__genres">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ''}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">주요정보</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ''}</div>
          </div>
        </div>
      </div>
      <div className="movie__heading">영화 제작사</div>
      <div className="movie__production">
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="movie__productionComapany"
                    src={'https://image.tmdb.org/t/p/original' + company.logo_path}
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
}
