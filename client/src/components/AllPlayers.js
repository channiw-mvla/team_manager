import React, { useEffect } from 'react'
import Top from './Top'
import axios from 'axios'
import { Link } from 'react-router-dom'
const AllPlayers = ({players,setPlayers}) => {
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
        .then((res)=>setPlayers(res.data))
        .catch((err)=>console.log(err));
    },[]);
    const deletePlayer = id =>{
        axios.delete('http://localhost:8000/api/players/'+id)
        .then(setPlayers(players.filter(player=> player._id !== id)))
        .catch((err)=>console.log(err));
    }
  return (
    <>
        <Top/>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            players.map((player,index)=>{
              return( 
                  <tr key={index}>
                    <th>
                      <Link to={"/players/"+player._id}>{player.name}</Link>
                    </th>
                    <th>
                      {player.position!==""?player.position:"None"}
                    </th>
                    <th>
                      <button className="btn btn-danger mx-3" onClick={()=>deletePlayer(player._id)}>Delete</button>
                    </th>
                  </tr>
                
            )})
            
          }
        </tbody>
      </table>
        
    </>
  )
}

export default AllPlayers