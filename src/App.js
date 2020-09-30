import React from 'react';
import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/contact';
import Product from './Components/Product';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';

function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  )
}
function App() {
  const navigate=useNavigate();
  const url='/about'
  return (
    <div className="App">
      <div>Welcome Front Page</div>
      <div>
        <Link to='/' >Home</Link>{'\t'}
        <Link to='/about' >About</Link>{'\t'}
        <Link to='/contact'>Contact</Link>{'\t'}
        <Link to='/products'>Product</Link>
        <button
        onClick={()=>{
          navigate(url);
        }}
        >
          Dunamic Navigate Button
        </button>
        
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/products' element={<Product />}>
          <Route path='/:productID' element={<ProductDetails />}></Route>
        </Route>
        <Route path='/*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
