import axios from '../../axios'
import {API_key,imgaeUrl} from '../../constants/constants'
import React,{useEffect, useState} from 'react'
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState()

  useEffect(()=>{

    axios.get(`trending/all/week?api_key=${API_key}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])

      setMovie(response.data.results[0])
    })

  },[])

  return (
    <div className='banner'
    style={{backgroundImage:`url(${movie ? imgaeUrl+movie.backdrop_path:""})`}}>
      
        
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className='banner_button'>
                <button className='button'>play</button>
                <button className='button'>My list</button>

            </div>
            <h1 className='description'>{movie ? movie.overview:""}</h1>

        </div>
        <div className="fade"></div>
        
    </div>
  )
}

export default Banner