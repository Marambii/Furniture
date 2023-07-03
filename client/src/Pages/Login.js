import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
          <div className='container mt-5'> 

<div class="row">
    <div class="col-md-6 bg-light rounded shadow d-flex justify-content-center mb-5">

      <form className='w-100 mt-2'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="name" class="form-control " id="exampleInputName" aria-describedby="emailHelp" />

  </div>


  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label ">Password</label>
    <input type="password" class="form-control " id="exampleInputPassword1" />
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

    <div class="col-md-5 mb-3 mx-4 mt-3">
      <div className=''>
    <h1 className='text-center text-danger'>
      𝐋𝐎𝐆<spin className="text-primary">𝐈𝐍</spin></h1>
   <hr></hr>
   <p className='fs-6 text'>
    𝖶𝖾 𝖺𝗋𝖾 𝖽𝖾𝗅𝗂𝗀𝗁𝗍𝖾𝖽 𝗍𝗈 𝗁𝖺𝗏𝖾 𝗒𝗈𝗎 𝖻𝖺𝖼𝗄! 𝖯𝗅𝖾𝖺𝗌𝖾 𝗅𝗈𝗀 𝗂𝗇 𝗍𝗈 𝗒𝗈𝗎𝗋 𝖺𝖼𝖼𝗈𝗎𝗇𝗍 𝗍𝗈 𝖼𝗈𝗇𝗍𝗂𝗇𝗎𝖾 𝗒𝗈𝗎𝗋 𝗃𝗈𝗎𝗋𝗇𝖾𝗒 𝗐𝗂𝗍𝗁 𝗎𝗌. 𝖤𝗇𝗍𝖾𝗋 𝗒𝗈𝗎𝗋 𝖼𝗋𝖾𝖽𝖾𝗇𝗍𝗂𝖺𝗅𝗌 𝗂𝗇 𝗍𝗁𝖾 𝗅𝗈𝗀𝗂𝗇 𝖿𝗈𝗋𝗆 𝖺𝗇𝖽 𝗀𝖾𝗍 𝗋𝖾𝖺𝖽𝗒 𝗍𝗈 𝖽𝗂𝗏𝖾 𝖻𝖺𝖼𝗄 𝗂𝗇𝗍𝗈 𝗈𝗎𝗋 𝖺𝗆𝖺𝗓𝗂𝗇𝗀 𝗐𝖾𝖻𝗌𝗂𝗍𝖾.
    </p>
</div>

      <img src='https://media.istockphoto.com/id/1414313740/vector/hacker-fishing-concept.jpg?s=612x612&w=0&k=20&c=1JOnGi1PFbsn6tuh3gdus0USAPNLlHgIv2TwfKofjEQ=' className='w-75 mx-5 md-2 m' alt='...'></img>

    </div>



  </div>

 </div>
    </div>
  )
}
