import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="container-lg text-center p-5">
      <div className="row">
        <div className="col-md-5 " style={{ minHeight: "30vh" }}>
          <h1>
            <img width="35" height="35" src="https://img.icons8.com/stencil/32/wardrobe.png" alt="wardrobe" />
            𝐅𝐮𝐫𝐧𝐢𝐭𝐮𝐫𝐞
            <h6 className='fs-6 fw-lighter mx-4.5'>ℭ𝔬𝔫𝔧𝔬𝔟𝔞 ℭ𝔬𝔪𝔭𝔞𝔫𝔶</h6>
          </h1>
          <hr />
          <h1 className='text-danger display-4'>𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗼𝘂𝗿 𝗙𝘂𝗿𝗻𝗶𝘁𝘂𝗿𝗲 𝗦𝘁𝗼𝗿𝗲, <span className='text-warning'>𝗝𝗼𝗵𝗻</span> </h1>
          <figcaption class="">𝒟𝒾𝓈𝒸𝑜𝓋𝑒𝓇 𝓉𝒽𝑒 𝒻𝒾𝓃𝑒𝓈𝓉 𝓈𝑒𝓁𝑒𝒸𝓉𝒾𝑜𝓃 𝑜𝒻 𝒻𝓊𝓇𝓃𝒾𝓉𝓊𝓇𝑒 𝒻𝑜𝓇 𝓎𝑜𝓊𝓇 𝒽𝑜𝓂𝑒.</figcaption>
          <Link to="/Home" className='btn btn-danger text-light rounded-pill w-75 mt-2'>𝙶𝚎𝚝 𝚂𝚝𝚊𝚛𝚝𝚎𝚍</Link>
        </div>
        <div className="col-md-7 mt-4" >
          <img src="https://media.istockphoto.com/id/1160623864/vector/family-watching-tv-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=4YUBG_v5laltF8xgAqnOn1_Bmgzcn7WbfaD7KJel0oY=" alt='landing page' className='w-100'></img>
        </div>
      </div>
      <hr />
      <div className=''>
        <div className="row mt-3">
          <div className="col-md-8">
            <div className='mb-1'>
            <img src='https://media.istockphoto.com/id/1259958434/vector/the-girl-is-sitting-on-the-couch-and-holding-a-laptop-freelance-and-learning-at-home-autumn.jpg?s=612x612&w=0&k=20&c=v_C0KJ1GdRwToT7TjbPED73qSb4o4a48tYS_zrBxD3I=' alt='....' className='w-75'></img>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className='mt-5'>
              <h1 className='text-danger'>𝗪𝗵𝘆 𝗖𝗵𝗼𝗼𝘀𝗲 𝗨𝘀?</h1>
              <hr></hr>
              <ul className=''>
          
                <p>𝖣𝗂𝗌𝖼𝗈𝗏𝖾𝗋 𝗍𝗁𝖾 𝗉𝖾𝗋𝖿𝖾𝖼𝗍 𝖿𝗎𝗋𝗇𝗂𝗍𝗎𝗋𝖾 𝖿𝗈𝗋 𝗒𝗈𝗎𝗋 𝗁𝗈𝗆𝖾. 𝖮𝗎𝗋 𝖼𝗎𝗋𝖺𝗍𝖾𝖽 𝖼𝗈𝗅𝗅𝖾𝖼𝗍𝗂𝗈𝗇 𝗈𝖿𝖿𝖾𝗋𝗌 𝗌𝗍𝗒𝗅𝗂𝗌𝗁 𝖺𝗇𝖽 𝗁𝗂𝗀𝗁-𝗊𝗎𝖺𝗅𝗂𝗍𝗒 𝗉𝗂𝖾𝖼𝖾𝗌 𝗍𝗁𝖺𝗍 𝖻𝗋𝗂𝗇𝗀 𝖼𝗈𝗆𝖿𝗈𝗋𝗍 𝖺𝗇𝖽 𝖾𝗅𝖾𝗀𝖺𝗇𝖼𝖾 𝗍𝗈 𝖺𝗇𝗒 𝗌𝗉𝖺𝖼𝖾. 𝖲𝗁𝗈𝗉 𝗐𝗂𝗍𝗁 𝗎𝗌 𝖺𝗇𝖽 𝗍𝗋𝖺𝗇𝗌𝖿𝗈𝗋𝗆 𝗒𝗈𝗎𝗋 𝗅𝗂𝗏𝗂𝗇𝗀 𝗋𝗈𝗈𝗆, 𝖻𝖾𝖽𝗋𝗈𝗈𝗆, 𝗈𝗋 𝖽𝗂𝗇𝗂𝗇𝗀 𝖺𝗋𝖾𝖺 𝗂𝗇𝗍𝗈 𝖺 𝗁𝖺𝗏𝖾𝗇 𝗈𝖿 𝗌𝗍𝗒𝗅𝖾 𝖺𝗇𝖽 𝗌𝗈𝗉𝗁𝗂𝗌𝗍𝗂𝖼𝖺𝗍𝗂𝗈𝗇.</p>
              </ul>
            </div>
          </div>
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
