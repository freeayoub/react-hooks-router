import React from 'react'
import Moviecard from './Moviecard'

function Movielist({movie, search,value}) {
  return (
    <div className="movie">
      
        {movie.filter((el)=> (el.name).toLowerCase().includes(search.toLowerCase().trim()) && el.rating>=value).map((el,index)=><Moviecard key={index} el={el}/>)
         
        }
    </div>
  )
}

export default Movielist
