import React, { useContext } from 'react'
import { FurnitureContext } from '../context/FurnitureContext'
import { Link } from 'react-router-dom'

export default function Card() {
  const { furnitures} = useContext(FurnitureContext)

  return (

    <div className="container-sm  p-2">
      
      { furnitures && furnitures.map((furniture) => (

        
        <div  className="card border-light shadow border-bottom rounded-3 bg-light mt-2 hoverable" style={{ width: '18rem' }}>
          <Link to={`/furniture/${furniture.id}`}>
        <img
          src={furniture.image}
          className="card-img-top roundedd img-fluid border-bottom border-danger"
          alt={furniture.category}
        />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-bold">
            KES <span className="text-danger">{furniture.price}</span>
          </h5>
          <p className="card-text text-center">✨{furniture.category}✨</p>
        </div>
        </div>
      
      ))
  
      }
       
    </div>
  )
}
