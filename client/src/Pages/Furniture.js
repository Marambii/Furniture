import React, { useContext } from 'react'
import { FurnitureContext } from '../context/FurnitureContext'
import { Link } from 'react-router-dom'

export default function Card() {
  const { furnitures} = useContext(FurnitureContext)

  return (

    
<div className="container-fluid p-3 d-flex flex-wrap justify-content-center">
  {furnitures &&
    furnitures.map((furniture) => (
      <div className="card p-3 border-light shadow border-bottom rounded-3 bg-light mt-2 hoverable col-12 col-sm-6 col-md-4 col-lg-3 mx-2 mb-4 my-3" style={{ maxWidth: '18rem' }}>
        <Link to={`/furniture/${furniture.id}`}>
          <img
            src={furniture.image}
            className="card-img-top roundedd img-fluid border-bottom border-danger"
            alt={furniture.category}
            style={{ objectFit: "fit", height: "230px" }}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-bold">
            KES <span className="text-danger">{furniture.price}</span>
          </h5>
          <p className="card-text text-center">✨{furniture.category}✨</p>
          <p className="card-text text-center">{furniture.user.username}</p>
        </div>
      </div>
    ))}
</div>

      
  )
}
