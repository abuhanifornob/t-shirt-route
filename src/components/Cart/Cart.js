import React from 'react'; 
import "./Cart.css"

const Cart = ({cart,handelRemoveCart}) => {
  
    
    const{name,price,picture}=cart;
    return (
        < div className='cart-product'>
            <div className='cart-information'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p><small>Price:{price}</small></p>
            </div>
           <div className='cancelButton'>
           <button onClick={()=>handelRemoveCart(cart)}>X</button>
           </div>

       
           
        </div>
    );
};

export default Cart;