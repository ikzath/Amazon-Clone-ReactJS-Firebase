import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";


function CheckoutProduct({ id, title, image, price, rating }) {

const [{basket}, dispatch] = useStateValue();

const deleteFromBasket = () => {
//add item to basket
    dispatch ({
        type: 'REMOVE_FROM_BASKET',
        id: id
    })
};
  
return ( 

 <div className='checkoutproduct'>

    <img className='checkoutproduct__image' src={image} alt='' />
     <div className = 'checkoutproduct__info'>
      <p className= 'checkoutproduct__info' >{title}</p>
      <p className='checkoutproduct__price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>   
    <div className='checkoutproduct__rating'>
      {Array(rating)
       .fill()
       .map((_) => (
    //   <span role='image'>🌟</span>
    <p>*</p>
    ))}    
     </div>
    </div>
      <button className='checkoutProduct__button' onClick= {deleteFromBasket} >Remove from basket</button>
</div>
);
}


export default CheckoutProduct;





