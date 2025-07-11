import React,{useState} from 'react'
import axios from 'axios'




const Addproducts = () => {
 
  // initialize the 4 states
  const[product_name,setProductName]=useState("")
  const[product_description,setProductDescription]=useState("")
  const[product_cost,setProductCost]=useState("")
  const[product_photo,setProductPhoto]=useState("")
  // update value of the four states


  // define the three states for posting data
const[loading,setLoading]=useState("")
const[success,setSuccess]=useState("")
const[error,setError]=useState("")

// function to post data
const submit = async (e) =>{
  // prevent browser from refreshing
  e.preventDefault()
  setLoading("uploading....")
  try {
    // create an envelope
    const formdata= new FormData()
    formdata.append("product_name",product_name)
    formdata.append("product_description",product_description)
    formdata.append("product_cost",product_cost)
    formdata.append("product_photo",product_photo)

    const response=await axios.post("https://bombadir.pythonanywhere.com/api/addproducts",formdata)
    setLoading("")
    setSuccess(response.data.message)
  
    


  } catch (error) {
    setLoading("")
    setError(error.message)
  }
}

  return (
    <div className='row  justify-content-center mt-4' >
      <div className='col-md-6 card shadow p-4'>
        <form onSubmit={submit}>
          <h3>Add Products</h3>

          {/* bind variables */}
          <h2 className="text-warning" >{loading}</h2>
          <h2 className='text-info' >  {success}</h2>
          <h2 className='text-danger'> {error}</h2>

          <label htmlFor="" className='text-start'>Product Name</label>
          <input type="text" 
          placeholder='Enter product Name'
          className='form-control' 
          onChange={(e) => setProductName (e.target.value)}
          required/> 
          <br />

          <label htmlFor="" className='text-start'>Product Description</label>
          <textarea name="" id=""
          placeholder='Enter product description'
          className="form-control"
          onChange={(e) =>setProductDescription (e.target.value)}
          required
          ></textarea>
          <br />
          <label htmlFor="">Product cost</label>

          <input type="number" 
          placeholder='enter product cost'
          className='form-control'
          onChange={(e) =>setProductCost (e.target.value) }
            required/>

          <br />
          <label htmlFor="">Product photo</label>
          <input type="file"
          className='form-control'
          required
          accept="image/*"
          onChange={(e)=> setProductPhoto(e.target.files[0])} /> 
          <br />

        <input type="submit" placeholder='Add product' className='btn btn-success w-100'/>
        </form>

      </div>

    </div>
  )
}

export default Addproducts