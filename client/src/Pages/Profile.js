import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext";

export default function Profile() {

const { current_user, logout } = useContext(AuthContext);
  console.log(current_user)

  return (
    <div className='container p-3 justify-content-center'>
        <div className="row"> 
            
<div className='col-md-6 p-3'>
  <img src='https://media.istockphoto.com/id/1336311181/photo/shot-of-a-young-businesswoman-against-a-studio-background.jpg?s=612x612&w=0&k=20&c=CasRoXs1nXKny3BmoctGPop24EJnH6sJY7lXhr03A0Q=' className='rounded w-100 shadow' style={{objectFit: 'cover' }} />
</div>
           <div className='col-md-6'>
        <div>
            <h1 className='text-danger display-3 text-center'>Nicole Banks</h1>
            <hr></hr>
            <h3 className='text-center '>nicolebanks@gmail.com</h3>
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
