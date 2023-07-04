import React from 'react';

  return (
    <div className="container-sm p-2">
      <div className="card border-light shadow border-bottom rounded-3 bg-light mt-2 hoverable" style={{ width: '18rem' }}>
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
          <p className="card-text text-center">✨{furniture.user.username}✨</p>
        </div>
      </div>
    </div>
  )
}
