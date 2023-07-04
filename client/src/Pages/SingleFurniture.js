import React, { useContext, useEffect, useState } from 'react'
import { FurnitureContext } from '../context/FurnitureContext'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function SingleFurniture() {
  
  const {current_user} = useContext(FurnitureContext)
  const {deletePost} = useContext(FurnitureContext)

  const {id} = useParams()
  const [furniture, setFurniture] = useState()

  useEffect(()=>{
  fetch(`/furnishings/${id}`)
  .then((res)=>res.json())
  .then((response)=>{
    setFurniture(response)
  })
 },[])

 const handleDelete = ()=>{
   
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    deletePost(id)
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
  
 }

  return (
    <div>
        <div className="container-lg text-center p-5">
      <div class="row mt-3">
      <div class="col-md-4">
        <div className='mt-5'>
      <h1 className='text-danger'>{furniture && furniture.category}</h1>
      <hr></hr>
        <p>{furniture && furniture.description}</p>
        
        <button onClick={handleDelete} className="btn btn-sm btn-danger rounded-pill w-75 my-2">DELETE</button>
        <Link to={`/updatefurniture/${id}`}  className="btn btn-sm btn-danger rounded-pill w-75 my-2">UPDATE</Link>
       
      </div>
      </div>

      <div class="col-md-8">

        <img src={furniture && furniture.image} alt='....' className='w-75' />
      </div>
    </div>
    </div>

    </div>
  )
}
