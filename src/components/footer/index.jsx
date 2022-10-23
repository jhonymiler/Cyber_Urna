import React from "react";
import "./footer.css";
import { FaLinkedinIn, AiOutlineGithub, TfiEmail } from "react-icons/all";
import { RiDiscordFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="footer mx-5">
      <div className="footer-copyright">
        <div>
          <p>
            {" "}
            © {new Date().getFullYear()} Cyber Urna, Inc. All Rights Reserved
          </p>
        </div>
        <div>
          <FaLinkedinIn size={25} color="white" className="footer-icon" />
          <AiOutlineGithub size={25} color="white" className="footer-icon" />
          <RiDiscordFill size={25} color="white" className="footer-icon" />
          <TfiEmail size={25} color="white" className="footer-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
