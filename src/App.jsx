
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';

function App() {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState('in'); 

  return (
    <>
      <Navbar setCategory={setCategory} setCountry={setCountry} /> 
      <NewsBoard category={category} country={country} />
    </>
  );
}

export default App;
