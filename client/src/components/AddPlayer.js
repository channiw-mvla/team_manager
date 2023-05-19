import React, { useState } from 'react'
import Top from './Top'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddPlayer = () => {
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    const handleSubmit = e =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/players/",{"name":e.target.name.value,"position":e.target.position.value})
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
          <input type="text" name='name' className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Position</label>
          <input type="text" name='position' className="form-control"/>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default AddPlayer