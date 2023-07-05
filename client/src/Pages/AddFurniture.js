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
    <div class="container col-xxl-8 px-4 py-3">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      
      <div class="col-lg-6 ">
      <form class="p-4 p-md-5 border rounded-3 bg-light shadow" onSubmit={handleSubmit}>
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
          <button class="w-100 btn btn-lg btn-danger rounded-pill" type="submit">Add Furniture</button>
          <hr class="my-4"/>
          <small class="text-muted">By clicking Add Event, you agree to the terms of use.</small>
          
        </form>
      </div>
      <div class="col-10 col-sm-8 col-lg-6">

          <h1 className='text-danger text-center'>𝐀𝐝𝐝 𝐚 𝐅𝐮𝐫𝐧𝐢𝐭𝐮𝐫𝐞</h1>
          <hr></hr>
          <p>𝖤𝗅𝖾𝗏𝖺𝗍𝖾 𝗒𝗈𝗎𝗋 𝗌𝗉𝖺𝖼𝖾 𝗐𝗂𝗍𝗁 𝗌𝗍𝗎𝗇𝗇𝗂𝗇𝗀 𝖿𝗎𝗋𝗇𝗂𝗍𝗎𝗋𝖾 𝗉𝗂𝖾𝖼𝖾𝗌 𝗍𝗁𝖺𝗍 𝖾𝗑𝗎𝖽𝖾 𝖾𝗅𝖾𝗀𝖺𝗇𝖼𝖾 𝖺𝗇𝖽 𝖼𝗁𝖺𝗋𝗆. 𝖤𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾 𝗍𝗁𝖾 𝗃𝗈𝗒 𝗈𝖿 𝖺 𝖻𝖾𝖺𝗎𝗍𝗂𝖿𝗎𝗅𝗅𝗒 𝖿𝗎𝗋𝗇𝗂𝗌𝗁𝖾𝖽 𝗁𝗈𝗆𝖾.</p>
          

        <img src="https://media.istockphoto.com/id/1259958434/vector/the-girl-is-sitting-on-the-couch-and-holding-a-laptop-freelance-and-learning-at-home-autumn.jpg?s=612x612&w=0&k=20&c=v_C0KJ1GdRwToT7TjbPED73qSb4o4a48tYS_zrBxD3I=" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
    </div>
  </div>

  )
}
