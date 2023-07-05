import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext";

export default function Profile() {

const { current_user, logout } = useContext(AuthContext);
  console.log(current_user)

  return (
    <div className='container p-3 justify-content-center'>
        <div className="row"> 
            
<div className='col-md-6 p-3'>
  <img src={current_user && current_user.profile_image } className='rounded w-100 shadow' style={{objectFit: 'cover' }} />
</div>
           <div className='col-md-6'>
        <div>
            <h1 className='text-danger display-3 text-center'>{current_user && current_user.username}</h1>
            <hr></hr>
            <h3 className='text-center '>{current_user && current_user.email}</h3>
            <h3 className='text-center '>{current_user && current_user.created_at}</h3>
            
          <h6 className='text-center'>
            <li className="nav-link active mx-5 " href="#">
                  <button onClick={() => logout()}className="btn rounded-pill bg-danger text-light w-50">
                    logout
                  </button>
                </li>
           </h6>     
        </div>
          </div>  




        </div>
  

    </div>
  )
}
