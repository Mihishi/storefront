import './Navbar.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import {  ShoppingCart } from "lucide-react";


function navbar() {

  const name ="STEM";
  const cartCount = "0";
  return (
    <nav className="navbar">
      <h1 className="CompanyName">Mebius</h1>
      <ul className="nav-links">

       <div className= "navsec1" >
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        </div> 

        <div className= "navsec2">
        <li><a href="/cart"> {cartCount} </a></li>
        <li> <a href="/cart"> <div> <ShoppingCart />  </div> </a> </li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/name">Hi {name}!</a></li>
      
        </div> 


      </ul>
    </nav>
  );
}

export default navbar;
