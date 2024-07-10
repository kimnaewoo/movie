import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/movie">
          <img
            className="header__icon"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
          />
        </Link>
        <Link to="movies/popular" style={{ textDecoration: 'none' }}>
          <span>인기 상영작</span>
        </Link>
        <Link to="movies/top_rated" style={{ textDecoration: 'none' }}>
          <span>최고순위 상영작</span>
        </Link>
        <Link to="movies/upcoming" style={{ textDecoration: 'none' }}>
          <span>개봉예정 상영작</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
