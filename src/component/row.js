import React,{useEffect,useState}from 'react'
import axios from "../axios"
import "./row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
function Abcd({title,fetchurl,isLarge}) {
  const[movie,setmovies] = useState([])
  const[trailerurl,settrailerurl] = useState("")
  const base_url = "https://image.tmdb.org/t/p/original/"
  
  useEffect(()=>{
  const fetchdata = async()=>{
      const request = await axios.get(fetchurl)
      setmovies(request.data.results)
  }
  fetchdata()
  },[fetchurl])
  console.log(movie)

  const opts = {
  width:"100%",
  height:"390",
  playerVars:{
      autoplay:1,
  }
}

const handleclick = (movie)=>{
    console.log(movie)
    if(trailerurl){
        settrailerurl("")
    }
    else{
        movieTrailer(movie.name || movie.original_name || movie.original_title || "").then(
            url=>{
                console.log(url)
               const movieurl= new URLSearchParams(new URL(url).search)
               console.log(movieurl)
               settrailerurl(movieurl.get("v"))
            }
        ).catch(err=>{
            console
            .log(err)
        })
    }
}

  return (
        <div className="row">
            <div>
                <h2>{title}</h2>
            </div>
            <div className="row_posters">
                    {movie.map(image=>{
                       return <img 
                       onClick = {() => handleclick(image)}
                       key={movie.id}
                       className={isLarge ? "row_poster_large" :"row_poster"} 
                       src={`${base_url}${isLarge ? image?.poster_path : image?.backdrop_path}`} alt={image.name}/>
                    })}
                
            </div>
            <div>
                {trailerurl && <Youtube  videoId={trailerurl} opts={opts} /> }
            </div>
        </div>
    )
}

export default Abcd
