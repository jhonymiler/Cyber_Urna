import React, { useState } from "react";
import "./navbar.css";
import { FaVoteYea } from "react-icons/all";
import Button from "react-bootstrap/Button";

const Navbar = ({ setShow, active, disconnect }) => {
  return (
    <div className="navbar mx-5 py-4">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <FaVoteYea size={40} color="#198754" />
          <h1 className="px-3 pt-2">Cyber Urna</h1>
        </div>
      </div>
      <div className="navbar-sign">
        {active ? (
          <>
            <Button
              variant="primary"
              className="primary-btn"
              onClick={() => disconnect()}
            >
              Desconectar
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="primary"
              className="primary-btn"
              onClick={() => setShow(true)}
            >
              Conectar
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
