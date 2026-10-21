import { useState } from "react";
import "../styles/NavBar.css";
function NavBar() {
    const [isOpen , setOpen] = useState(false);
    const menuHandel = () =>{
      setOpen(!isOpen);
    }
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1 style={{color:isOpen?"rgb(0, 210, 128)" :"white"}}>StarLight</h1>
        </div>
        <ul className={ isOpen?"nav-links active" : "nav-links"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Product">Products</a>
          </li>
          <li>
            <a href="#OurTeam">Our Team</a>
          </li>
          <li><a href="#Partners">Partners</a>
          </li>
        </ul>
        <div className="headerBtns">
          <button className="discord">
            <i className="fa-brands fa-discord"></i>Discord
          </button>
          <button className="contact">
            <i className="fa-regular fa-address-book"></i>Contact
          </button>
          <button onClick={menuHandel} className="menu"><i  className="fa-solid fa-bars"></i></button>
        </div>
      </div>
    </header>
  );
}
export default NavBar;
