import './App.css';
import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route, Link, Navigate} from 'react-router-dom'
import Weather from './components/Weather';
import Favorites from './components/Favorites';
import Header from './components/Header';
import Test from './components/Test';

function App() {
  const [yourFavorites, setyourFavorites] = useState("")
  const [height, setheight] = useState(window.innerHeight);
  const [width, setwidth] = useState(window.innerWidth);
  const [inputSearch, setInputSearch] = useState("");
  const [city, setCity] = useState("Tel Aviv");
  const [citiesList , setCitiesList]= useState("")

  useEffect(() => {
    function handleResize() {
        setheight(window.innerHeight);
        setwidth(window.innerWidth);  
    }
    window.addEventListener('resize', handleResize);
},[])
useEffect(()=>{
  console.log("get date frm server");
  setCity(inputSearch);
},[inputSearch])

// useEffect(()=>{
//   fetch('http://dataservice.accuweather.com/locations/v1/cities/autocomplete')
//   .then((data)=>{
//     console.log(data);
//     setCitiesList(data)})
  
// },[])


  return (
    // className="App"
    <div style={{width:`${width}px`,height:`${height}px`}} >
        <Router>
          <Header/>
    <Routes>
      <Route path='/' element={<Weather onUpdate={(input)=>{ setInputSearch(input)}}/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path='/favorites' element={<Favorites/>}/>

    </Routes>
     </Router>
    </div>
  );
}

export default App;
