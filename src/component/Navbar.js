import React,{useState,useEffect}from 'react'
import "./Navbar.css"
function Navbar() {
  const[nav,setnav]=useState(false)

  useEffect(() => {
    
      window.addEventListener("scroll",()=>{
          if(window.scrollY>100){
              setnav(true)
          }
          else{
              setnav(false)
          }
      })
      return () => {
         window.removeEventListener("scroll")
      }
  }, [])


    return (
        <div className={nav ? "nav_black" :"nav"}>
            <div className="logo1">
            <img src="https://img.icons8.com/color/48/000000/netflix.png" alt="NetFlix"/>
            </div>
        </div>
    )
}

export default Navbar
