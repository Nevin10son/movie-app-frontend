import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changedata]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8008/view").then(
            (response)=>{
                changedata(response.data)
            }
        )
    }
    useEffect(()=>(fetchData()),[])
  return (
    <div>
        <NavBar/>
        <h1>View Movie Ratings</h1>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    {
                        (data.map(
                            (value,index)=>{
                                return <div className="col-col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
              
              <div class="card-body">
                <h5 class="card-title">Title: {value.title}</h5>
                <p class="card-text">Director: {value.director}</p>
                <p class="card-text">Cast: {value.cast}</p>
                <p class="card-text">Rating: {value.rating}</p>
                
              </div>
            </div>
                                </div>
                            }
                        ))
                        
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll
