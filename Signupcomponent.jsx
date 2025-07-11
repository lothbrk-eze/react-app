import axios from 'axios'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Signupcomponent = () => {
    // initialize the 4 states 
    // i.e username,email, phone ,password 
    const[username,setUsername]=useState("John")
    const[email,setEmail]=useState("john@gmail.com")
    const[phone,setPhone]=useState("0798765432")
    const[password,setPassword]=useState("0987")
  
    // three stse for posting data 
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setErrror]=useState("")
  
    // function to post data 
    const submit = async(e)=>{
      // prevent the browser from refreshing 
      e.preventDefault()
      setLoading("Please wait as we upload your data")
      try {
        // create an envelope to carry your data 
        const formdata= new FormData()
        formdata.append("username",username)
        formdata.append("email",email)
        formdata.append("phone",phone)
        formdata.append("password",password)
  
        // post data using axios 
        const response =await axios.post("https://bombadir.pythonanywhere.com/api/signup" ,formdata)
        setLoading("")
        setSuccess(response.data.message)
  
        
  
  
      } catch (error) {
        setLoading("")
        setErrror(error.message)
        
      }
  
    }
  
    return (
      <div className='row Mpesapaymentcomponent justify-content-center mt-4'>
          <div className="col-md-6 card  shadow p-4">
          <h1>Sign Up</h1>
          {/* bind the states  */}
          <h3 className="text-warning">{loading}</h3>
          <h3 className="text-success">{success}</h3>
          <h3 className="text-danger">{error}</h3>
          
          <form action="" className='text-start p-5' onSubmit ={submit} >
              <label htmlFor="">Username</label>
              <input type="text"className='form-control'placeholder='Enter username' onChange={(e)=>setUsername(e.target.value)} />
              <label htmlFor="">Email</label>
              <input type="email"className='form-control'placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} />

              <label htmlFor="">Phone</label>
              <input type="number" className='form-control' placeholder='Enter phone number' onChange={(e) =>setPhone }/>



              <label htmlFor="">Password</label>
              <input type="password"className='form-control'placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} /><br />
  
              <input type="submit" value="Sign Up" className='form-control btn btn-primary' />
          </form>
          {/* link to go to signin pageimport axios from 'axios'  */}
          <Link to="/signin">Already have an account? Click to sign in</Link>
      </div>
      </div>
    )
  }
  
  export default Signupcomponent