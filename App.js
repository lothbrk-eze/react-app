
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Addproducts from './components/Addproducts';
import Signincomponent from './components/Signincomponent';
import Signupcomponent from './components/Signupcomponent';
import Getproducts from './components/Getproducts';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';

import Mpesapaymentcomponent from './components/Mpesapaymentcomponent';
//import reacter-router-dom
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'



function App() {
return (
<BrowserRouter>
<div className="App">
<Navbar/>
{/* include the navigation links */}
<nav className='m-4'>
<Link to="/signup" className='btn btn-danger mx-2'>Signup</Link>
<Link to="/signin" className='btn btn-danger mx-2'>Signin</Link>
<Link to="/addproduct" className='btn btn-danger mx-2'>Addproducts</Link>
<Link to="/" className='btn btn-danger mx-2'>Getproducts</Link>
</nav>

<Routes>
<Route path ="/signup" element ={<Signupcomponent/>}/>


<Route path ="/signin" element ={<Signincomponent/>}/>
<Route path ="/addproduct" element ={<Addproducts/>}/>
<Route path ="/" element ={<Getproducts/>}/>
<Route path ="*" element ={<Notfound/>}/>
<Route path='/makepayment' element={<Mpesapaymentcomponent/>}/>
</Routes>
</div>
</BrowserRouter>
)
}

export default App;







