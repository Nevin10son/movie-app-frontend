import logo from './logo.svg';
import './App.css';
import AddMovies from './components/AddMovies';
import SearchMovies from './components/SearchMovies';
import ViewAll from './components/ViewAll';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddMovies/>}/>
      <Route path="/search" element={<SearchMovies/>}/>
      <Route path="/view" element={<ViewAll/>}/>
      </Routes></BrowserRouter>
  )
}

export default App;
