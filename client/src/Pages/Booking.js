import React from 'react'

export default function Booking() {
  

  return (
    <div className="container-fluid p-3 d-flex flex-wrap justify-content-center">
   
      <div className="card p-3 border-light shadow border-bottom rounded-3 bg-light mt-2 hoverable col-12 col-sm-6 col-md-4 col-lg-3 mx-2 mb-4 my-3" style={{ maxWidth: '18rem' }}>
        
          <img
            src="https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=BSBGae3sdyCHLH911Iv3mplZFoCbjq22ryBMqGpC5Rk="
            className="card-img-top roundedd img-fluid border-bottom border-danger"
            alt=".."
            style={{ objectFit: "fit", height: "230px" }}
          />
    
        <div className="card-body">
          <h5 className="card-title text-bold">
            KES <span className="text-danger">2,500</span>
          </h5>
          <p className="card-text text-center">✨Armchair✨</p>
          <p className="card-text text-center">your can start booking your favorite furniture</p>
        </div>
      </div>
    
</div>
  )
}
