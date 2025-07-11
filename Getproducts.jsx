import axios from "axios"
import React,{ useEffect, useState} from "react"

const Getproducts = () => {
//   // intialize the product state
// const[product,setProduct]=useState("")
// // fect the data
// useEffect( ()  =>{
//   fetch('')

// }

// )
// step 1
// define the three states of getting data
const[loading,setLoading]=useState("")
const[products,setSuccess]=useState([])
const[error,setError]=useState("")

// function to grt products
const getproducts= async() =>{
  setLoading("please wait...")
  try {
    const response=await axios.get("https://iancharles.pythonanywhere.com/api/getproducts")
    setLoading("")
    setSuccess(response.data)
    // console.log(response.data)
    
  } catch (error) {
    setLoading("")
    setError(error.message)
    
  }


}


// call the function
useEffect( ()=>{

  getproducts()

} ,[])

// give path to the image
const imagepath="https://iancharles.pythonanywhere.com/static/images/"





  return (
    <div className='row'>
      {/* map our products */}
      {products.map(product=>(
   <>
    
      {/* child 1 */}
    <div className='col-md-3 mt-4 card shadow p-4 mb-2 m-2' >
      <div className='card-header'>
      
        </div>
      <div className='card-body'>
      <img src={imagepath + product.product_photo } alt="" className='w-100'/>
        <b> {product.product_name} </b> <br />
        <p> {product.product_description} </p>
        <b className='text-success'> {product.product_cost} </b> <br />
        <input type="submit" value={"Add to  cart"} className='btn btn-outline-primary w-100' /> <br /> <br />
        <input type="submit" value={"Add to cart"} className='btn btn-dark w-100' />

        </div>
      <div className='card-footer'>
        
      </div>

    </div>
   
   </>
   ))}
      
    </div>
  )
}

export default Getproducts