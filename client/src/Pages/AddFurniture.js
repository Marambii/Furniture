import React, { useContext, useState } from 'react'
import { FurnitureContext } from '../context/FurnitureContext'

export default function AddFurniture() {
    const { addFurniture } = useContext(FurnitureContext)

    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')


    const  handleSubmit = (e) =>{
        e.preventDefault()
        addFurniture(image, price, description, category)
    }  
  return (
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://media.istockphoto.com/id/1259958434/vector/the-girl-is-sitting-on-the-couch-and-holding-a-laptop-freelance-and-learning-at-home-autumn.jpg?s=612x612&w=0&k=20&c=v_C0KJ1GdRwToT7TjbPED73qSb4o4a48tYS_zrBxD3I=" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
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
          <button class="w-100 btn btn-lg btn-danger" type="submit">Add Furniture</button>
          <hr class="my-4"/>
          <small class="text-muted">By clicking Add Event, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>

  )
}
