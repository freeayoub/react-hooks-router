

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Addmovie from './Addmovie';
import './App.css';
import { moviesData } from './components/Data';
import Home from './components/Home';
import Trailer from './components/Trailer';
import Movielist from './Movielist';
import Navbare from './Navbare';


function App() {
  const [search , setSearch] = useState("");
  const [movie , setMovie] = useState(moviesData);
  console.log(movie);
  const [value, setValue] = useState(0);
  console.log(value);

 
  return (
    <div className="App">

    <Navbare setSearch={setSearch} setValue={setValue} value={value}/>
  
    
    <Routes>

    <Route path='/home' element={<Home />}/>
    <Route path='/movies' element={<Movielist movie = {movie} search ={search} value={value}/>}/>
    <Route path='/addmovies' element={<Addmovie setMovie={setMovie} movie={movie} />}/>
    <Route path='/movie/:id' element={<Trailer movie = {movie} />}/>
    </Routes>  
    </div>
  );
}

export default App;
