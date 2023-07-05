import React, { useContext, useEffect, useState } from 'react'
import { FurnitureContext } from '../context/FurnitureContext'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import Rate from './Rate'

export default function SingleFurniture() {
  
  const {current_user} = useContext(FurnitureContext)
  const {deleteFurniture} = useContext(FurnitureContext)

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
    deleteFurniture(id)
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
      
      <div class="col-md-6">

        <img src={furniture && furniture.image} alt='....' className='w-100 rounded shadow'  style={{objectFit: "cover"}}  />
      </div>
      <div class="col-md-6">
        <div className='mt-3 mx-4'>
      <h1 className='text-danger text-center'>{furniture && furniture.category}</h1>
      <hr></hr>
        <p>{furniture && furniture.description}</p>
        <hr></hr>
          <p>Posted by :{furniture && furniture.user.username}</p>
        <hr></hr>
        {
          current_user && furniture.user.is_admin === true &&
          <button onClick={handleDelete} className="btn btn-sm btn-danger rounded-pill w-75 my-2">DELETE</button>
        }

        <Link to={`/updatefurniture/${id}`}  className="btn btn-sm btn-danger rounded-pill w-75 my-2">UPDATE</Link>

        <div className='row mt-3'>
          <div className='col-md-5'>
            <ul> start booking<Link to="/Booking" className="btn btn-sm btn-danger rounded-pill w-75 my-2">Booking</Link></ul>

          </div>
          <div className='col-md-6'>
          <ul> Rate: <Rate /></ul>     
          </div>
        </div>
       



      </div>
      </div>
    </div>
    </div>

    </div>
  )
}
