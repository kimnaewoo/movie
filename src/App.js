import Header from './components/Header.jsx';
import './css/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx';
import Movielist from './components/Movielist.jsx';
import Moviedetail from './components/Moviedetail.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index path="movie" element={<Home />}></Route>
          <Route path="movie/:id" element={<Moviedetail />}></Route>
          <Route path="movies/:type" element={<Movielist />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
