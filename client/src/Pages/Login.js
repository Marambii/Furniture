import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Login() {

  const {login} = useContext(AuthContext)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(username+ "  "+password)
   
    login(username, password)
}  
  return (
    <div>
          <div className='container mt-5'> 

<div class="row">
    <div class="col-md-6 bg-light rounded shadow d-flex justify-content-center">

  <form onSubmit={handleSubmit} className='w-100 mt-2'>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Username</label>
        <input type="text"  value={username} onChange={(e)=> setUsername(e.target.value) } class="form-control " id="exampleInputName" aria-describedby="emailHelp" />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label ">Password</label>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value) } class="form-control " id="exampleInputPassword1" />
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input " id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>

      <div className='d-flex justify-content-center'>
          <button type="submit" class="btn btn-primary rounded-pill w-50">Submit</button>
      </div>
      <div className='form-text p-3 d-flex justify-content-center'>Don't have an account? 
        <Link to="/Register"> Register</Link>
      </div>
      
      <div className='d-flex justify-content-center mb-2 mt-2'>
      <img height="120" width="120" className="rounded-circle shadow" src='https://media.istockphoto.com/id/1409980655/vector/access-denied-notification.jpg?s=612x612&w=0&k=20&c=5v2fB88uIATI_rW7z96hbe9QrqYcQYSkwb4gc4X0zSA='></img>
    </div>
  </form>
    </div>

    <div class="col-md-5 mb-3 mx-3 mt-3">
      <div className=''>
    <h1 className='text-center text-danger'>
      LOG<spin className="text-primary">IN</spin></h1>
   <hr></hr>
   <p className='fs-6 text'>
    We are delighted to have you back! Please log in to your account to continue your journey with us. Enter your credentials in the login form and get ready to dive back into our amazing community.
    </p>
</div>

      <img src='https://media.istockphoto.com/id/1414313740/vector/hacker-fishing-concept.jpg?s=612x612&w=0&k=20&c=1JOnGi1PFbsn6tuh3gdus0USAPNLlHgIv2TwfKofjEQ=' className='w-75 mx-5 md-2 m' alt='...'></img>

    </div>



  </div>

 </div>
    </div>
  )
}
