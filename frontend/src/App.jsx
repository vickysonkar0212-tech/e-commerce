
import './App.css'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home'
import Login from'./Auth/Login'
import Signup from './Auth/Signup';
import Forgot from './Auth/Forgot'
import Applayout from './layout/App';
import About from './pages/About';
import Shop from './pages/Shop';
import Offer from './pages/Offers';
import Blog from './pages/blog';
import ShippingInfo from './pages/Shipping';
import OrderTracking from './pages/Ordertracking';
import ReturnPolicy from './pages/ReturnPolicy';
import Support from './pages/Support';
import FAQ from './pages/FAQ';
import  { Toaster } from 'react-hot-toast';
import CartForm from "./pages/cart";
import Cartpage from "./context/cartpage"
import { CartProvider } from "./context/cartcontext";
import Carthistory from "./context/orderedhistory"

function App() {


  return (
    <>
   <CartProvider>  
    <BrowserRouter>
    {/* Routes */}
    <div><Toaster/> </div>
         <Routes> 
          <Route path="/" element={<Applayout />} >
             <Route index element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
       <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
            <Route path="/offer" element={<Offer/>} />
               <Route path="/blog" element={<Blog/>} />
                    <Route path="/shipping" element={<ShippingInfo/>} />
                      <Route path="/tracking" element={<OrderTracking/>} />
                       <Route path="/returnpolicy" element={<ReturnPolicy/>} />
                         <Route path="/support" element={<Support/>} />
                          <Route path="/faq" element={<FAQ/>} />
                           <Route path="/checkout" element={<CartForm />} />
                            <Route path="/cart" element={<Cartpage />} />
                            <Route path="/carthistory" element={<Carthistory />} /> 
     </Route>
  {/* <Route path="/footer" element={<Footer/>} /> */}
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup/>} />
           <Route path="/forgot" element={<Forgot/>} />
     </Routes>
    </BrowserRouter>
 </CartProvider>
    </>
  )
}
export default App


