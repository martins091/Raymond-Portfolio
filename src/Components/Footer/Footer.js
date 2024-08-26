import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <span>Copyright &copy;2024</span>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/raymond-okoh/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.behance.net/rayokoh">
              <i className="fa-brands fa-behance"></i>
            </a>
      </div>
      <a href="#!" className="footer-logo">
        raymond*
      </a>
    </footer>
  );
};
export default Footer;
