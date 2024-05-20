import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="container">
        <div>
          <div>
            <h2 className="title-font">CATEGORIES</h2>
            <nav>
              <li>
                <a>First Link</a>
              </li>
              <li>
                <a>Second Link</a>
              </li>
              <li>
                <a>Third Link</a>
              </li>
              <li>
                <a>Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
        <div>
          <div>
            <h2>CATEGORIES</h2>
            <nav>
              <li>
                <a>First Link</a>
              </li>
              <li>
                <a>Second Link</a>
              </li>
              <li>
                <a>Third Link</a>
              </li>
              <li>
                <a>Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
        <div>
          <div>
            <h2>CATEGORIES</h2>
            <nav>
              <li>
                <a>First Link</a>
              </li>
              <li>
                <a>Second Link</a>
              </li>
              <li>
                <a>Third Link</a>
              </li>
              <li>
                <a>Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
        <div>
          <div className="contactContainer">
            <h2>CONTACT</h2>
            <nav>
              <li>
                <a className="contactLink">
                  <FaPhoneAlt /> your contact
                </a>
              </li>
              <li>
                <a className="contactLink">
                  <FaEnvelope />
                  your email.com
                </a>
              </li>
              <li>
                <a className="contactLink">
                  <FaTwitter />
                  your twitter.com
                </a>
              </li>
              <li>
                <a className="contactLink">
                  <FaInstagram />
                  instagram.com
                </a>
              </li>
              <li>
                <a className="contactLink">
                  <FaFacebookF />
                  youremail.com
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="container ">
        <p>
          © 2023 Tourism Management System —
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @YourName
          </a>
        </p>
        <span>
          <a>
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h12a1 1 0 011 1v3" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0}
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-2a2 2 0 00-2-2 2 2 0 00-2 2v2a2 2 0 002 2h2"
              />
              <circle cx={12} cy={12} r={3} />
              <line x1={16} y1={12} x2={19} y2={12} />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
