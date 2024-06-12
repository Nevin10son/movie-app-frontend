import axios from 'axios'
import React, { useState } from 'react'

const SearchMovies = () => {
    const [film,setdata] =useState(
        {
            "title":""
        }
    )
    const deleteFunction =(id) =>{
        let input = {"_id":id}
        axios.post("http://localhost:8008/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.Status=="success") {
                    alert("Successfully Deleted")
                } else {
                    alert("error")
                }
            }
        )
    }
    const [result,changedata] = useState([])

    const inputHandler = (event)=>{
        setdata({...film,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(film)
        axios.post("http://localhost:8008/search",film).then(
            (response)=>{
                console.log(response.data)
                changedata(response.data)
            }
        )
    }
  return (
    <div>
        <h1>Search movie</h1>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Search movie by name:</label>
                        <input type="text" className="form-control" name='title' value={film.title} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>Search</button>
                    </div>
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Director</th>
      <th scope="col">Cast</th>
      <th scope="col">Rating</th>
      <th></th>
    </tr>
  </thead>
    {
        (result.map(
            (value,index)=>{
                return  <tbody>
                <tr>
                  <td>{value.title}</td>
                  <td>{value.director}</td>
                  <td>{value.cast}</td>
                  <td>{value.rating}</td>
                  <td><button className="btn btn-danger" onClick={()=>deleteFunction(value._id)}>Delete</button></td>
                </tr>
                
              </tbody>
            }
        ))
    }
</table>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchMovies
