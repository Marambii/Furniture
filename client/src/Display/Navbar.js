import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {

  const { current_user, logout } = useContext(AuthContext);
  console.log(current_user)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-danger border-2 ">
      <div className="container-fluid">
        <div className="fs-4">
          <Link to="/" className="nav-link active " href="#">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/stencil/32/wardrobe.png"
              alt="wardrobe"
            />
            𝐅𝐮𝐫𝐧𝐢𝐭𝐮𝐫𝐞<h6 className="fs-6 fw-lighter mx-4.5">ℭ𝔬𝔫𝔧𝔬𝔟𝔞 ℭ𝔬𝔪𝔭𝔞𝔫𝔶</h6>
          </Link>
        </div>

        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target="#navbarNavAltMarkup"aria-controls="navbarNavAltMarkup"aria-expanded="false"aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link to='/' className="nav-link active mx-5" aria-current="page" href="#">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-rounded/24/FA5252/home.png"
                alt="home"
                className="mb-1"
              />
              <span class="text-home">𝗛𝗢𝗠𝗘</span>
            </Link>


            { current_user && current_user.username ?

            <>
                <Link to='/furniture' className="nav-link active mx-5" aria-current="page" href="#">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/FA5252/home.png"
                    alt="home"
                    className="mb-1"
                  />
                  <span class="text-home">FURNITURE</span>
                </Link>
                 <Link to='/addfurniture' className="nav-link active mx-5 " href="#">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/fluency-systems-filled/24/FA5252/add.png"
                    alt="add"
                    className="mb-1"
                  />
                  𝗔𝗗𝗗
                </Link>

                <Link to='/profile' className="nav-link active mx-5 " href="#">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/ios-glyphs/24/FA5252/test-account.png"
                    alt="test-account"
                    className="mb-1"
                  />
                  𝗣𝗥𝗢𝗙𝗜𝗟𝗘
                </Link>

            </>:
            <>

                <li className="nav-link active mx-5">
                  <Link to="/Login" className="btn rounded-pill bg-danger text-light">
                    𝙻𝚘𝚐𝚒𝚗
                  </Link>
                </li>
            </>

            }


          </ul>
        </div>
      </div>
    </nav>
  );
}
