import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Shows() {
  const [renders,setLoading]=useState(false)
  const [shows,setShows]=useState([])

  async function getShows(){
    let res = await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=ff4dd361ce5607f7d3ac94421574d785')
    setShows(res.data.results)
  }
  useEffect(()=>{
    getShows()
    setTimeout(()=>{
      setLoading(true)
    },1000)
  },[])

  return (
    <>
      <div className='container'>
      {renders? <div className='row g-3'>
      {shows.map((show,index)=>(
        <div className='col-md-4 mb-5' key={index}>
          <div className='shadow rounded overflow-hidden shadow card'>
            <img src={`https://image.tmdb.org/t/p/w500`+show.poster_path} className='w-100'></img>
            <div className='p-2 text-center'>
            <h5>{show.original_name}</h5>
            <p>{show.overview.split(' ').splice(0,20).join(' ')}</p>
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
    </div> }
      </div>

  </>
)

}
