import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirts from '../Tshirts/Tshirts';
import "./Home.css"

const Home = () => {
    const tshirts=useLoaderData();
    const[cart,setCart]=useState([]);
    let message;
    if(cart.length===0){
        message=<p>Please Buy Some Product</p>
    }
    else if(cart.length>3){
        message=<p>Already Product By more then three </p>
    }
    
    else{
        message=<p>Thanks for Buying!..</p>
    }

 
    const handelCartAdd=async(tshirt)=>{
        const exist= cart.find(findItem=> findItem._id ===tshirt._id);
        if(!exist){
            const newCart=[...cart,tshirt];
            setCart(newCart);
        }
        else{
            alert("Already Add this cart"); 
        }
       
    }
    const handelRemoveCart=async(removeItem)=>{
        const rest=cart.filter(removeTs=> removeTs._id!==removeItem._id)
        setCart(rest)
    }
    return (
        <div className='product-details-container'>
            <div className='tshirt-info-container'>
            {
                tshirts.map(tshirt=><Tshirts
                 key={tshirt._id}
                 tshirt={tshirt}
                 handelCartAdd={handelCartAdd}
                ></Tshirts>)
            }
            </div>
            <div className='cart-container'>
                    <h1 className={cart.length===0 ? `red`: 'orange'}>Order Summary </h1>
                    <p className={`bold ${cart.length===3 ?'red': 'orange' }`}>Selected Item: {cart.length}</p>
                    {
                        cart.map(ts=><Cart
                         key={ts._id}
                         cart={ts}
                         handelRemoveCart={handelRemoveCart}
                         
                        ></Cart>)
                    }
                     {
                message
            }
            <p>Ternary Operator</p>

            {
             cart.length >=1 ? <p>thanks for buing</p>:<p>Please buy Some Product</p>
            }
            <p>Use And Operator</p>
            {
              (cart.length===0 && <p>Please</p>)
            }
            </div>
           
        </div>
    );
};

export default Home;