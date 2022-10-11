import React from 'react'; 
import "./Tshirts.css"

const Tshirts = ({tshirt,handelCartAdd}) => {
    const{name,price,picture,_id}=tshirt;
    return (
        <div className='t-shirt-information'>
            <img src={picture} alt="T-shirt Image"></img>
            <p>{name}</p>
            <h3>Price: ${price}</h3>
            <button onClick={()=>handelCartAdd(tshirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirts;