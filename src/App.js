import logo from './logo.svg';
import './App.css';
import AddMovies from './components/AddMovies';
import SearchMovies from './components/SearchMovies';

function App() {
  return (
    <div className="App">
      <AddMovies/>
      <SearchMovies/>
    </div>
  )
}

export default App;
