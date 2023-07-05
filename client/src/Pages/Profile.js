import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext";

export default function Profile() {

const { current_user, logout } = useContext(AuthContext);
  console.log(current_user)

  return (
    <div>
        <body className='bg-light' style={{"min-height": "70vh"}}>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-10 mt-5 pt-5 shadow rounded'>
                        <div className='row z-depth-3 '>
                            <div className='col-sm-4  rounded-left bg-white'>
                                <div className='card-block text-center'>
                                <img src={current_user && current_user.profile_image } className='rounded w-100 shadow' style={{objectFit: 'cover' }} />
                                    <h2 className='fw-bold mt-4'>  Hello <spin className="text-danger">{current_user && current_user.username}</spin></h2>
                                    <i className='far fa-edit fa-2x mb-4'></i>
                                </div>
                            </div>
                            <div className='col-sm-8 bg-white rounded-right'>
                                <h3 className='mt-3 text-center'>Information</h3>
                                <hr className='badge-primary mt-0 w-100'/>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <p className='fw-bold'>Email:</p>
                                        <h6 className='text-muted'>{current_user && current_user.email}</h6>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='fw-bold'>Username:</p>
                                        <h6 className='text-muted'>{current_user && current_user.username}</h6>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='fw-bold'>Joined on:</p>
                                        <h6 className='text-muted'>{current_user && current_user.created_at}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </div>
  

  )
}
