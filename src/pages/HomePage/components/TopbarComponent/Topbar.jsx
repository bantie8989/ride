import "./topbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
  FaPinterest
} from "react-icons/fa";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"> <FaFacebookF/></i>
          <i className="topIcon fab fa-twitter-square">
            <FaTwitter/>
          </i>
          <i className="topIcon fab fa-pinterest-square">
            <FaPinterest/>
          </i>
          <i className="topIcon fab fa-instagram-square">
            <FaInstagram/>
          </i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">MY ACCOUNT</li>
            <li className="topListItem">DRIVER </li>
            <li className="topListItem">PAYMENT</li>
            <li className="topListItem">REDE REQUEST</li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImage"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
          <i className="topSearchIcon fas fa-search">
            <FaSearch/>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
