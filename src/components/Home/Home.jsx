import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import userEvent from '@testing-library/user-event'


export default function Home() {
  const [renders,setLoading]=useState(false)
  const[Movies,setMovies]=useState([])

  async function getMovies(){
    const res = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=ff4dd361ce5607f7d3ac94421574d785')
    const final_res = res.data.results.splice(0,3)
    setMovies(final_res)
  }

  useEffect(()=>{
    getMovies()
    setTimeout(()=>{
      setLoading(true)
    },1000)
  },[])

  return (
    <>
    <h1 className='p-5'>Welcome to Home page</h1>
    <div className='container main-home'>
        { renders ? 
        <div className='row g-4 mb-3 pb-3'>
        <h3 className='home-text'>Top 3 Movies of the Week</h3>
        {Movies.map((movie,index)=>(
        <div className='col-md-4 bg-dark p-3'key={index}>
          <div className='card bg-light shadow rounded'>
            <img src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} className='w-100'></img>
              <div className='text-center p-2'>
                <h5>{movie.title}</h5>
                <p>{movie.overview.split(' ').splice(0,20).join(' ')}</p>
              </div>
          </div>
        </div>
        ))}</div>:<div className='vh-100 w-100 d-flex justify-content-center align-items-center'>
        <div className="fa-3x">
          <i className="fas fa-circle-notch fa-spin text-dark"></i>
        </div> 
        </div>}
    </div>
    </>
  )
}
