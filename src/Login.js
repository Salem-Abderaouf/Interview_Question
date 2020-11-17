import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import Footer from './components/Footer';
import ResetPasswordModal from './components/ResetPasswordModal'

export default function Login() {

  const [isModalShow, setModalShow] = React.useState(false)

  //function to validate Email and password input 
  const validateEmailInput =()=>{
    const email = document.getElementById('emailInput');
    const msg = document.getElementById('error-msg')
    //regex to check both email and phone number
    const mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
    const passwdMsg = document.getElementById('passwdMsg')
    const passwd = document.getElementById('passwd')
    // regex to check password : 
    // at least 8 ltters length
    // at least one Caplitae letter
    // at least one degit 
    const passwdFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    if (email.value ==="") {
        msg.innerHTML = "Please enter your Email or Phone Number";
    }
    else if (!mailFormat.test(email.value)) {
        msg.innerHTML="Email Address or Phone number is not valid, Please provide a valid Email or phone number ";
        return false;
    }
    else if(!passwdFormat.test(passwd.value)){
      passwdMsg.innerHTML="password must contain at least 8 letters<br> and one uppercase letter";
        return false;
    }
    else {
      const form = document.getElementById('login-form')
      form.submit()
    }
  }
  
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center" id="wrapper">
    <div className="log-in px-4 pt-3 pb-5">
    <div className="mb-4">
    <img src={require('../assets/kidsloop_min_logo.png')} alt="kidsloop" className="Brand-Logo"/>
    </div>
    <h4>Sign In</h4>
   <form action="/" method="POST" id="login-form">
  <div className="form-group my-4">
    <input type="email" placeholder="Email or Phone *" id="emailInput" className="form-control custome-input" aria-describedby="emailHelp" required/>
  <ul id="error-list">
    <li><p className="d-block text-danger mt-1" id="error-msg"></p></li>
  </ul> 
   </div>
  <div className="form-group">
    <input type="password" placeholder="Password *" className="form-control custome-input" id="passwd" required/>
    <ul id="error-list">
  </ul> 
  </div>
  <div className="d-flex justify-content-between align-items-center mb-4">
  <a className="link" type="button" onClick={()=>setModalShow(true)}>Forgot Password?</a>
  <button type="button" onClick={validateEmailInput} className="btn btn-primary custome-button px-4">Sign In</button>
  </div>
  <Link to="/register" className="link">Create an account</Link>
</form>
    </div>
    <Footer />
     <ResetPasswordModal
        show={isModalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
