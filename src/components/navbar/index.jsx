import React, { useState } from "react";
import "./navbar.css";
import { FaVoteYea } from "react-icons/all";
import Button from "react-bootstrap/Button";

import { useWeb3React } from "@web3-react/core";
import ModalConectores from "../modalconectores";

const Navbar = () => {
  const [modalShow, setShow] = useState(false);
  const { deactivate, active } = useWeb3React();

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
              onClick={deactivate}
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
              Conectar Wallet
            </Button>
          </>
        )}
      </div>

      <ModalConectores show={modalShow} onHide={() => setShow(false)} />
    </div>
  );
};

export default Navbar;
