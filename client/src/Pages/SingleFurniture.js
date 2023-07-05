import React, { useContext, useEffect, useState } from 'react';
import { FurnitureContext } from '../context/FurnitureContext';
import { AuthContext } from '../context/AuthContext';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Rate from './Rate'

export default function SingleFurniture() {
  const { deleteFurniture } = useContext(FurnitureContext);
  const { current_user } = useContext(AuthContext);
  const { id } = useParams();

  const [furniture, setFurniture] = useState();
  const nav = useNavigate();

  useEffect(() => {
    fetch(`/furnishings/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setFurniture(response);
      });
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
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
        deleteFurniture(id);
        nav('/furniture');
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  };


  return (
    
      <div className="container-lg text-center p-5">
        {furniture && furniture.error ? (
          <div>{furniture.error}</div>
        ) : (
          furniture && (
            <div class="row mt-3">
              <div class="col-md-6 mt-4">
                <img src={furniture.image} alt="...." className="w-100 shadow rounded" />
              </div>
              <div class="col-md-6">
                <div className="mt-2">
                  <h1 className="text-danger">{furniture.category}</h1>
                  <hr></hr>
                  <p>{furniture.description}</p>
                  <hr></hr>
                  <p>Posted by: {furniture.user && furniture.user.username}</p>
                  {/* <p>Being read by: {current_user && current_user.username}</p> */}
                  <hr></hr>
                  {(current_user && current_user.username === furniture.user.username) || (current_user && current_user.is_admin) ? (
                    <>
                      <Link to={`/updatefurniture/${id}`} className="btn btn-sm btn-danger rounded-pill w-75 my-2">UPDATE</Link>
                      <button onClick={handleDelete} className="btn btn-sm btn-danger rounded-pill w-75 my-2">DELETE</button>
                    </>
                  ) : null}
                  <div className='row mt-3'>
          <div className='col-md-5'>
            <ul> start booking<Link to='/Booking' className="btn btn-sm btn-danger rounded-pill w-75 my-2">Booking</Link></ul>

          </div>
          <div className='col-md-6'>
          <ul> Rate: <Rate /></ul>     
          </div>
        </div>
                </div>
              </div>

              
            </div>
          )
        )}

      </div>
    
  );
}
