import React from 'react'

const Mpesapaymentcomponent = () => {
  return (
 <div className='row justify-content-center'>
  <div className=' col-md-6 card shadow mt-4 '>
    <img src="" alt="" /> <br />
    <b className='text-start'>Daly maziwa</b> <br />
    <p className='text-start'>this is a good product</p> <br />
    <b className='text-start'>Ksh 300</b> <br />

    <input type="number"
    placeholder='enter phone(2547XXXXXXXX)'
    className='text-start'
     /> <br />
    
     <div className='card-footer'>
     <input type="submit"
     value={"Make Payment"}
     className='btn btn-success w-100 text-start' />
     </div>

  </div>

 </div>
  )
}

export default Mpesapaymentcomponent