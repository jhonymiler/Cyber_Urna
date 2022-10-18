import React from "react";
import { FaVoteYea } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <div className="header mx-5 mt-5">
      <div className="header-content">
        <div>
          <div>
            <h1>Vote com Cyber Urna!</h1>
            <h3>
              Cyber Urna é uma urna eletrônica com <span>Block Chain</span>.
              Conecte sua Wallet para votar!
            </h3>
          </div>
          <FaVoteYea size={150} color="#198754" />
        </div>
      </div>
    </div>
  );
};

export default Header;
