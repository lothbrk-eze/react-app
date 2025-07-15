import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    // retrieve user from local storage
    const loggeduser = JSON.parse (localStorage.getItem("user"))

  return (
    
        <div class="bg-secondary">
    
                <nav class="navbar navbar-expand-md navbar-light bg-body shadow">
                    <a href="#" class="navbar-brand"><b className='text-success'>Sky</b><b className='text-success'>world</b></a>
                    <button class="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarcollapse">

                    
                    <span class="navbar-toggler-icon"></span>

                </button>
                
                 <div class="collapse navbar-collapse" 
                 id="navbarcollapse">
             {/* links are */}
            
             <Link to="/" className='btn mx-2 text-info'>Getproducts</Link>
             <Link to="/addproduct" className='btn text-info  mx-2'>Addproducts</Link> 
                 </div>
                 
                 {/* right hand of navbar */}
                 <div className='ms-auto d-flex align-items-center gap-3'>
                    logged in as : {loggeduser.email}
                 </div>
                </nav>
            </div>
    
    
  )
}

export default Navbar
