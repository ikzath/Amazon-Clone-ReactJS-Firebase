import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from './Firebase';


function Header() {

  const [{ basket, user }] = useStateValue();

  const login = () => {
    if(user) {
      auth.signOut();
    }
  }
  
    return (
        <nav className='header'> 
            {/* logo on the left -> image */}
        <Link to ='/'>
        <img className='header__logo' 
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
      
        </Link>    

        {/* Search box */}
        <div className='header__search'>
        <input type='text' className='header__searchInput'></input>
        <SearchIcon className='header__searchIcon' />
        </div>

        {/*  3 links  */}
        <div className='header__nav'>

        {/* 1st link* */}
        <Link to={!user && '/login'}  className='header__link'>
          <div onClick={login} className='header__option'>              
    <span className='header__option__line1'>{user?.email}</span>
            <span className='header__option__line2'>{!user? 'Sign in': 'SIgn out' }</span>
        </div>  
        </Link>

        {/* 2nd link* */}
        <Link to='/login' className='header__link'>
          <div className='header__option'>              
            <span className='header__option__line1'>Returns</span>
            <span className='header__option__line2'>Orders</span>
        </div>  
        </Link>

        {/* 3rd link* */}
        <Link to='/' className='header__link'>
          <div className='header__option'>              
            <span className='header__option__line1'>Yours</span>
            <span className=' header__option__line2'>Prime</span>
        </div>  
        </Link>

        {/* basket icons with number  */}
        <Link to='/checkout' className='header__link'>
        <div className='header__optionBasket'>
            {/* basket icon */}
            <ShoppingBasketIcon />
            {/* number of items in basket */}
            <span className='header__option__line2 header__basketCount'>{basket.length}</span>
        </div>
        </Link>

        </div>
        </nav> 
    )
}

export default Header;
