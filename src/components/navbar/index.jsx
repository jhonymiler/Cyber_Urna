import React, { useState } from "react";
import "./navbar.css";
import { FaVoteYea } from "react-icons/all";
import Conectores from "../conectores";

const Navbar = (conectores, ativate, deactivate) => {
  const [user, setUser] = useState(false);

  const [show, setShow] = useState(false);

  const handleLogin = () => {
    setUser(true);
  };

  return (
    <div className="navbar mx-5 py-4">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <FaVoteYea size={40} color="#198754" />
          <h1 className="px-3 pt-2">Cyber Urna</h1>
        </div>
      </div>
      <div className="navbar-sign">
        {user ? (
          <>
            <button type="button" className="secondary-btn">
              Conectado
            </button>
          </>
        ) : (
          <>
            <button type="button" className="primary-btn" onClick={handleLogin}>
              Conectar Wallet
            </button>
          </>
        )}
      </div>
      <Conectores show={show} setShow={setShow} />
    </div>
  );
};

export default Navbar;
