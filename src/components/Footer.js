import React from "react";
import "../styles.css";

// since its consider as repeated piece of code

const Footer =()=>{
  const toggelDarkMode=()=>{
    const wrapper = document.getElementsByTagName('body')[0]
    wrapper.classList.toggle("dark")
  }
  return(
    <div className="d-flex justify-content-evenly align-items-center mb-4 px-2">
    <div><ion-icon name="sunny" className="toggler" onClick={toggelDarkMode}></ion-icon></div>
      <div> 
        <select className="custom-select" id="select-box">
          <option selected disabled>Select Language</option>
          <option value="1">Korean</option>
          <option value="2">France</option>
          <option value="3">Arabic</option>
        </select>
      </div>
      <div>
        <ul >
          <li className="mx-1">Terms</li>
          <li className="mx-1">Privacy</li>
          <li className="mx-1">Help</li>
        </ul>
    </div>
    </div>
  )
}
export default Footer;