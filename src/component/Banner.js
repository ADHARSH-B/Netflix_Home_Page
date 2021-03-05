import React,{useEffect,useState}from 'react'
import request from "../request"
import axios from "../axios"
import "./Banner.css"
function Banner() {
    const[Movies,setMovies] = useState([])
    useEffect(()=>{
      const fetchdata = async()=>{
          const movies = await axios.get(request.fetchNetflixOrginals) 
          const movie = movies.data.results
          console.log(movie)
          setMovies(movie[Math.floor(Math.random()*movie.length-1)])
      }
      fetchdata()
    },[])
    console.log(Movies)
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." :str
    }
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(https://image.tmdb.org/t/p/original/${Movies?.backdrop_path})`,
            backgroundPosition:"center center"
        }}
        >
            <div className="banner_content">
                <div className="banner_title">
                   <h1>{Movies?.original_title || Movies?.title || Movies?.name}</h1>
                </div>
                <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                </div>
               <div className="banner_description">
                       <h3>{ truncate(Movies?.overview,150)}</h3>
               </div>
               <div className="banner-fadedbottom">
               </div>
            </div>
        </header>
    )
}

export default Banner
