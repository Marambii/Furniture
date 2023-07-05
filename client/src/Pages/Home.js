import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Landing() {

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
            style={{ objectFit: "cover", height: "220px" }}
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
      <hr />


      <div class="row mt-3">
    <div class="col-md-4">
<div className='mt-5'>
    <h1 className='text-danger'>𝐃𝐢𝐬𝐜𝐨𝐯𝐞𝐫 𝐚 𝐖𝐨𝐫𝐥𝐝 𝐨𝐟 𝐅𝐮𝐫𝐧𝐢𝐭𝐮𝐫𝐞 𝐈𝐧𝐬𝐩𝐢𝐫𝐚𝐭𝐢𝐨𝐧</h1>
    <hr></hr>
      <p>𝖲𝗁𝖺𝗋𝖾 𝗒𝗈𝗎𝗋 𝗎𝗇𝗂𝗊𝗎𝖾 𝖿𝗎𝗋𝗇𝗂𝗍𝗎𝗋𝖾 𝗉𝗂𝖾𝖼𝖾𝗌 𝗐𝗂𝗍𝗁 𝗈𝗎𝗋 𝖼𝗈𝗆𝗆𝗎𝗇𝗂𝗍𝗒 𝖺𝗇𝖽 𝗂𝗇𝗌𝗉𝗂𝗋𝖾 𝗈𝗍𝗁𝖾𝗋𝗌 𝗐𝗂𝗍𝗁 𝗒𝗈𝗎𝗋 𝗌𝗍𝗒𝗅𝖾 𝖺𝗇𝖽 𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝗂𝗍𝗒. 𝖶𝗁𝖾𝗍𝗁𝖾𝗋 𝗒𝗈𝗎 𝗁𝖺𝗏𝖾 𝗏𝗂𝗇𝗍𝖺𝗀𝖾 𝗍𝗋𝖾𝖺𝗌𝗎𝗋𝖾𝗌, 𝗆𝗈𝖽𝖾𝗋𝗇 𝗆𝖺𝗌𝗍𝖾𝗋𝗉𝗂𝖾𝖼𝖾𝗌, 𝗈𝗋 𝗁𝖺𝗇𝖽𝗆𝖺𝖽𝖾 𝗐𝗈𝗋𝗄𝗌 𝗈𝖿 𝖺𝗋𝗍, 𝗈𝗎𝗋 𝗉𝗅𝖺𝗍𝖿𝗈𝗋𝗆 𝗂𝗌 𝗍𝗁𝖾 𝗉𝖾𝗋𝖿𝖾𝖼𝗍 𝗉𝗅𝖺𝖼𝖾 𝗍𝗈 𝗌𝗁𝗈𝗐𝖼𝖺𝗌𝖾 𝗒𝗈𝗎𝗋 𝖼𝗈𝗅𝗅𝖾𝖼𝗍𝗂𝗈𝗇.</p>
      
      
      <a href="" className="btn btn-danger rounded-pill w-75">𝖲𝗍𝖺𝗋𝗍 𝖲𝗁𝖺𝗋𝗂𝗇𝗀 𝖸𝗈𝗎𝗋 𝖥𝗎𝗋𝗇𝗂𝗍𝗎𝗋𝖾</a>
    </div>
    </div>

    <div class="col-md-8">

      <img src='https://media.istockphoto.com/id/915213532/vector/sofa-and-chair-sets-and-home-accessories-vector-flat-illustration.jpg?s=612x612&w=0&k=20&c=-WzMG7-HCgyUiz7F5yK_nH6XX39apjZ5g0UZ35i6LJ0=' alt='....' className='w-75' />
    </div>
  </div>

<hr></hr>



    </div>
  );
}
