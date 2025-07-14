import axios from 'axios'
import React,{useState}  from 'react'
import { useLocation } from 'react-router-dom'

const Mpesapaymentcomponent = () => {
  const imagepath="https://bombadir.pythonanywhere.com/static/images/"
  const {product} = useLocation().state  || {}
  const[phone,setPhone]=useState("")
  const[amount,setAmount]=useState("")

  // 3 states of posting data
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
// function to post data
const submit = async (e) => {
  e.preventDefault()
  setLoading("Please wait....")
  try {
    // initialize a new envelope
    const formdata= new FormData()
    formdata.append("phone",phone)
    formdata.append("amount","1")
    const response= await axios.post(" https://ryw.pythonanywhere.com/api/mpesa_payment ",formdata)

    setLoading("")
    setSuccess(response.data.message)
  } catch (error) {
    
  }
}

  return (
 <div className='row justify-content-center'>
  <div className=' col-md-6 card shadow mt-4 '>
    <img src={imagepath + product.product_photo } alt="" /> <br />
 
    <h3>{product.product_name}</h3>

  
    <b className='text-start'>{product.product_cost}</b> <br />

    <form action="" onSubmit={submit}>
      <input type="number"
      placeholder='Enter your number 2547XXXXXXXX'
      className='form-control'
      onChange={ (e)=>setPhone(e.target.value)} /> <br />
      <input type="submit"
      value={"Make payment"}
      className='btn btn-success w-100' />
      <br />
      <h2 className="text-warning"> {loading}</h2>
    <h2 className="text-success"> {success}</h2>
    <h2 className="text-danger">{error}</h2>
    </form>

  </div>

 </div>
  )
}

export default Mpesapaymentcomponent
