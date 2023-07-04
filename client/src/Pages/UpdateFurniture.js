import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, useParams } from 'react-router-dom'
import { FurnitureContext } from '../context/FurnitureContext'

function UpdateFurniture() {

  const {current_user} = useContext(AuthContext)
  const { editFurniture } = useContext(FurnitureContext)

  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const { id } = useParams();
    console.log(id);

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    editFurniture(image, price, description, category, current_user.id)
}

  return (

    <div>
    <div className="container" style={{"min-height":"70vh"}}>
      {current_user && current_user?
      <>
        
        <div class="col-md-10 mx-auto col-lg-5">
        <h3 className='text-center'>  Update Furniture </h3>
        <form class="p-4 p-md-5 border rounded-3 bg-light" onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
            <input type="text" onChange={(e)=> setImage(e.target.value)} class="form-control" id="floatingInput" placeholder=""/>
            <label for="floatingInput">Image</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" onChange={(e)=> setCategory(e.target.value)} class="form-control" id="floatingInput" placeholder=""/>
            <label for="floatingInput">Category</label>
          </div>
    
          <div class="form-floating  mb-3">
            <input type="text" onChange={(e)=> setDescription(e.target.value)} class="form-control" id="floatingInput" placeholder=""/>
            <label for="floatingInput">Description</label>
          </div>
          <div class="form-floating  mb-3">
            <input type="integer" onChange={(e)=> setPrice(e.target.value)} class="form-control" id="floatingInput" placeholder=""/>
            <label for="floatingInput">Price</label>
          </div>
          <button class="w-100 btn btn-lg btn-danger" type="submit">Update Event</button>
          <hr class="my-4"/>
          <small class="text-muted">By clicking Update Event, you agree to the terms of use.</small>
        </form>
      </div>
    
    </>
    : 
    <>

        <div class="modal modal-sheet position-static d-block  py-5" tabindex="-1" role="dialog" id="modalSheet">
          <div class="modal-dialog shadow" role="document">
            <div class="modal-content rounded-6 shadow">
              <div class="modal-header border-bottom-0 ">
                <h5 class="modal-title ">Access Denied</h5>
                <button type="button " class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body py-0 ">
                <p>You are required to register an account or sign in to access the contents of this page</p>
              </div>
              <div class="modal-footer flex-column border-top-0">
                <Link to='/signup' type="button" class="btn btn-lg btn-danger w-100 mx-0 mb-2">Sign up</Link>
                <Link to='/login'type="button" class="btn btn-lg btn-danger w-100 mx-0">Log in</Link>
              </div>
            </div>
          </div>
        </div>
    
    </>
   
  }
    </div>
    </div>
  )
}

export default UpdateFurniture