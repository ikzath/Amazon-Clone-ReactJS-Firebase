import React, { useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from './Firebase';

function Login() {

const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");
const history = useHistory();


const register = (e) => {
  // prevent auto submission
  e.preventDefault();
      
auth 
//check login
.signInWithEmailAndPassword(email, password) 
.then((auth) => {
//logged in , redirect to homepage
history.push("/");

})
.catch((e) => alert(e.message));
};


const createAccount = (e) => {

e.preventDefault();

  //check login
  auth
  .createUserWithEmailAndPassword(email, password) 
  .then((auth) => {
    //logged in , redirect to homepage
    history.push("/");

  })
  .catch((e) => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
      <img 
      className = 'login__logo'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'       alt = ''
      />

    </Link>
      <div className='login__container'>
        <h2>Sign In</h2>

        <form>
        <h5>Email</h5>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

        <h5>Password</h5>
        <input type='text' value={password} onChange={e => setPassword(e.target.value)} />


        <button type='submit' onClick={register} className='login__signInButton' >Login</button>

        </form>
        
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button type='submit' className='login__registerButton' onClick= {createAccount}>Create your Amzon account</button>
      </div>

    </div>
   )
}

export default Login;
