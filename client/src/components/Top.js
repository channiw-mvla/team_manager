import React from 'react'
import { Link } from 'react-router-dom'
const Top = () => {
  return (
    <div className="d-flex mb-3">
        <h1>
          <Link to={"/"}>All Players</Link>
        </h1>
        <h1 className='mx-3'>
          <Link to={"/addplayer"}>Add Player</Link>
        </h1>
    </div> 
  )
}

export default Top