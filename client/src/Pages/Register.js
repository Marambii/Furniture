import React from 'react'
import { Link } from 'react-router-dom';

function Register() {

    



  return (
    <div className='p-4 container mt-3'> 
    <div class="row">
    <div class="col-md-6 rounded shadow bg-light">

      <form className='mt-2'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="name" class="form-control " id="exampleInputName" aria-describedby="emailHelp" />

  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label ">Password</label>
    <input type="password" class="form-control " id="exampleInputPassword1" />
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Add image</label>
    <input type="name" class="form-control " id="exampleInputName" aria-describedby="emailHelp" />

  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input " id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  
  <button type="submit" class=" btn btn-primary w-50 rounded-pill">Submit</button>

  <div className='form-text p-2'>have an account? 
    <a href="/Login"> Login</a>
  </div>
  
</form>

    </div>

    <div class="col-md-5 mx-3 mt-3">
      <div className='mx-2'><h1 className='text-center text-danger'>𝐅𝐞𝐞𝐥 𝐟𝐫𝐞𝐞 𝐭𝐨 <spin className="text-primary">𝐫𝐞𝐠𝐢𝐬𝐭𝐞𝐫</spin> </h1>
      <hr></hr>
      <p >
        𝖶𝖾 𝗐𝖺𝗋𝗆𝗅𝗒 𝗐𝖾𝗅𝖼𝗈𝗆𝖾 𝗒𝗈𝗎 𝗍𝗈 𝗃𝗈𝗂𝗇 𝗎𝗌! 𝖯𝗅𝖾𝖺𝗌𝖾 𝗍𝖺𝗄𝖾 𝖺 𝗆𝗈𝗆𝖾𝗇𝗍 𝗍𝗈 𝖿𝗂𝗅𝗅 𝗈𝗎𝗍 𝗍𝗁𝖾 𝗋𝖾𝗀𝗂𝗌𝗍𝗋𝖺𝗍𝗂𝗈𝗇 𝖿𝗈𝗋𝗆 𝖺𝗇𝖽 𝖻𝖾𝖼𝗈𝗆𝖾 𝖺 𝗉𝖺𝗋𝗍 𝗈𝖿 𝗈𝗎𝗋 𝖼𝗈𝗆𝗆𝗎𝗇𝗂𝗍𝗒. 𝖶𝖾 𝖼𝖺𝗇'𝗍 𝗐𝖺𝗂𝗍 𝗍𝗈 𝗁𝖺𝗏𝖾 𝗒𝗈𝗎 𝗈𝗇 𝖻𝗈𝖺𝗋𝖽 𝖺𝗇𝖽 𝗌𝗁𝖺𝗋𝖾 𝖾𝗑𝖼𝗂𝗍𝗂𝗇𝗀 𝖾𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾𝗌 𝗍𝗈𝗀𝖾𝗍𝗁𝖾𝗋!
      </p>
      </div>
      
      <img src='https://media.istockphoto.com/id/1464992670/vector/password-security-vector-designg.jpg?s=612x612&w=0&k=20&c=tcYgjQVJXdwElGhL4TLZpCS90X9pfOgXAeVK9eIVp5Q=' alt='..' className='w-100'></img>
    </div>
  </div>




    </div>
    
  )
}

export default Register