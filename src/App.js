import React from 'react';
import './App.css';
import Banner from "./component/Banner"
import Navbar from "./component/Navbar"
import request from "./request"
//import Row from '../src/component/row'
import  Abcd from '../src/component/row';
function App() {
  return (
    <div className="App">
    <Navbar/>
     <Banner/>
     <Abcd title="NETFLIXORGINALS" fetchurl={request.fetchNetflixOrginals} isLarge />
     < Abcd title="Trending Now" fetchurl={request.fetchTrending}/>
     < Abcd title="Top rated" fetchurl={request.fetchTopRated}/>
     < Abcd title="Action Movies" fetchurl={request.fetchActionMovies}/>
     < Abcd title="Horror Movies" fetchurl={request.fetchHorrorMovies}/>
     <Abcd title="Comedy Movies" fetchurl={request.fetchComedyMovies}/>
     <Abcd title="Romance Movies" fetchurl={request.fetchRomanceMovies}/>
     <Abcd title="Documentaries" fetchurl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
