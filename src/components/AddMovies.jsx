import axios from 'axios'
import React, { useState } from 'react'

const AddMovies = () => {
    const [film,setfilm] = useState(
        {
            "title":"",
            "director":"",
            "cast":"",
            "rating":""
        }
    )
    const inputHandler = (event)=>{
        setfilm({...film,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(film)
        axios.post("http://localhost:8008/add",film).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=='success'){
                    alert("Added Successfully")
                }else{
                    alert("Something's wrong")
                }
            }
        )
    }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Title</label>
                        <input type="text" className="form-control" name='title' value={film.title} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Director:</label>
                       <input type="text" className="form-control" name='director' value={film.director} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Cast:</label>
                        <input type="text" className="form-control" name='cast' value={film.cast} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Rating:</label>
                        <input type="text" className="form-control" name='rating' value={film.rating} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-warning" onClick={readValue}>Add Movies</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddMovies
