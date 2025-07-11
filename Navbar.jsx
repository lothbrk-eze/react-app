import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    
        <div class="">
    
                <nav class="navbar navbar-expand-md navbar-light bg-white shadow">
                    <a href="#" class="navbar-brand"><b className='text-danger'>Soko</b><b className='text-info'>Garden</b></a>
                    <button class="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarcollapse">

                    
                    <span class="navbar-toggler-icon"></span>

                </button>
                
                 <div class="collapse navbar-collapse" 
                 id="navbarcollapse">
             {/* links are */}
            
             <Link to="/" className='btn mx-2'>Getproducts</Link>
             <Link to="/addproduct" className='btn  mx-2'>Addproducts</Link>     
                 </div>
                </nav>
            </div>
    
    
  )
}

export default Navbar