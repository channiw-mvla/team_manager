import React, { useEffect, useState } from 'react'
import Top from './Top'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const PlayerEdit = () => {
  const [player, setPlayer] = useState([])
  const [errors, setErrors] = useState([])
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8000/api/players/"+id)
    .then(res => setPlayer(res.data))
    .catch(err => console.log(err))
    } 
  , [])
  const handleSubmit = e =>{
    e.preventDefault();
    axios.patch("http://localhost:8000/api/players/"+id,{"name":e.target.name.value,"position":e.target.position.value})
    .then(res => { 
      if(res.data.message !== undefined){
        let temp = []
        for(let error in res.data.error.errors)
          temp.push(res.data.error.errors[error].message)
        setErrors(temp)
      }
        else
           navigate("/")
    })
    .catch(err => console.log(err))
    
  }
  return (
    <>
      <Top/>
      {
        errors.map((error,index)=>
          <div key={index} className="alert alert-danger">{error}</div>
        )
      }
      <form action="" onSubmit={e => handleSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Player Name</label>
          <input type="text" name='name' className="form-control" placeholder={player.name} defaultValue={player.name}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Player Position</label>
          <input type="text" name='position' className="form-control" placeholder={player.position} defaultValue={player.position}/>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default PlayerEdit