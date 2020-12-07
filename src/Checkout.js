import React from 'react';
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Checkout() {

const [ { basket }] = useStateValue();

 return (
  <div className='checkout'> 
    <div className='checkout__left'> 
     <img
     className='checkout__ad' 
     src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
     alt = ''
    />
       {basket?.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
                <p>Click "Add to basket" to add one or more items to the basket</p>
          </div>
          ) : ( 
          <div className='checkout__title'>
            <h2>Your shopping basket </h2>
            {basket?.map( (item, id) => (
              // console.log(basket);
  
            <CheckoutProduct            
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
            />
          ))}
        </div>
       )}  
    </div>
    {
      basket.length > 0 && (
        <div className = 'checkout__right'>
        <Subtotal />
       </div>
      )
    }
  </div>
  );
}

export default Checkout;
