import React from "react";
import "./Footer.css";

const Footer = ()=>{
    return(
        <footer>
            <span>Copyright &copy;2023</span>
            <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=100086715874671">
                    <i className="fa-brands fa-facebook"></i>
                     
                </a>
                <a href="https://www.instagram.com/martinsejiofo/">
                    <i className="fa-brands fa-instagram"></i>
                     
                </a>
                <a href="https://www.youtube.com/channel/UCuaob9_bMUfdwot5IerF8KQ">
                    <i className="fa-brands fa-youtube"></i>
                </a>

                
            </div>
            <a href="#!" className="footer-logo">mar~tinz*</a>
        </footer>
    )
}
export default Footer;