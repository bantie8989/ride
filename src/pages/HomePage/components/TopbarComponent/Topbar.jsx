import {
  Button,
  ColorModeContext,
  useColorMode,
} from "@chakra-ui/react";
import "./topbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSearch,
  FaPinterest,
} from "react-icons/fa";

function Topbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="topbarContainer">
      <div className="top">
        <div className="topLeft">
          <i className="topIcon ">
            {" "}
            <FaFacebookF />
          </i>
          <i className="topIcon ">
            <FaTwitter />
          </i>
          <i className="topIcon ">
            <FaPinterest />
          </i>
          <i className="topIcon ">
            <FaInstagram />
          </i>
        </div>

        <Button onClick={toggleColorMode}>
          Toggle {ColorModeContext === "light" ? "Dark" : "Light"}
        </Button>

        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">የኔ ገጽ </li>
            <li className="topListItem">ሾፌር</li>
            <li className="topListItem">ክፍያ</li>
            <li className="topListItem">የራይድ አገልግሎት </li>
            <li className="topListItem">ስለ እኛ </li>
          </ul>
        </div>
        <div className="topRight">
          <div className="inputContainer">
            <i className="topSearchIcon ">
              <FaSearch />
            </i>
            <input type="text" className="searchInput" placeholder="ይፈልጉ..." />
          </div>
          <img
            className="topImage"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
