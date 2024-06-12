import logo from './logo.svg';
import './App.css';
import AddMovies from './components/AddMovies';
import SearchMovies from './components/SearchMovies';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div className="App">
      <AddMovies/>
      <SearchMovies/>
      <ViewAll/>
    </div>
  )
}

export default App;
