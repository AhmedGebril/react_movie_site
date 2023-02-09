import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Movies() {
  const [renders,SetLoading]=useState(false)
  const [Movies,setMovies]=useState([])

  async function getMovies(){
    let res = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=ff4dd361ce5607f7d3ac94421574d785')
    setMovies(res.data.results)
  }
  useEffect(()=>{
    getMovies()
    setTimeout(()=>{
      SetLoading(true)
    },1000)
  },[])

    return (
      <>
        <div className='container'>
        {renders? <div className='row g-3 '>
        {Movies.map((movies,index)=>(
          <div className='col-md-4  pb-3' key={index}>
            <div className='shadow rounded overflow-hidden shadow card'>
              <img src={`https://image.tmdb.org/t/p/w500`+movies.poster_path} className='w-100'></img>
              <div className='p-2 text-center'>
              <h5>{movies.title}</h5>
              <p>{movies.overview.split(' ').splice(0,20).join(' ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      :
      <div className='vh-100 w-100 d-flex justify-content-center align-items-center'>
      <div className="fa-3x">
        <i className="fas fa-circle-notch fa-spin text-dark"></i>
      </div>
      </div>  }
        </div>
    </>
  )
}
