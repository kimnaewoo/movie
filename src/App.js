import Header from './components/Header.jsx';
import Movie from './components/Movie.jsx';
import './css/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/movie" index element={<h1>hello world</h1>}></Route>
          <Route path="movie/:id" element={<h1>Movie detail page</h1>}></Route>
          <Route path="movies/:type" element={<h1>Movie detail page</h1>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
      <Movie />
    </div>
  );
}

export default App;
