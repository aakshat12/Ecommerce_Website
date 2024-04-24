
import './App.css';

import Home from './Component/Home'
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import Checkout from './Component/Checkout'
import Signup from './Component/Signup';
import { Login } from './Component/Login';
import Products from './Component/Products';

function App() {
  const login = window.localStorage.getItem("isLogedIn");
  return (
    <>
   
   <BrowserRouter>
   
   <Routes>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Checkout' element={<Checkout/>}></Route>
    <Route path='/'   element= {<Signup/>}></Route>
    <Route path='/login' element={login? <Home/>:<Login/>}></Route>
    <Route path="/products/:productName" element={<Products/>}></Route>
   
    
   </Routes>
   </BrowserRouter>
   
  
 
  </>
  );
}

export default App;
