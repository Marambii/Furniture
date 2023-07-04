import React from 'react';
import { Link } from 'react-router-dom';

function Card() {
  return (
    
    <div className="container-sm bg-white p-2">
       <Link to="/Singlecard" style={{ textDecoration: 'none' }}>
      <div className="card border-light shadow border-bottom rounded-3 bg-light mt-2 hoverable" style={{ width: '18rem' }}>
        <img
          src="https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=BSBGae3sdyCHLH911Iv3mplZFoCbjq22ryBMqGpC5Rk="
          className="card-img-top roundedd img-fluid border-bottom border-danger"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-bold">
            KES <span className="text-danger">12,500</span>
          </h5>
          <p className="card-text text-center">✨𝖠𝗋𝗆𝖼𝗁𝖺𝗂𝗋✨</p>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Card;
