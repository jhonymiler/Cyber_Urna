import React from "react";
import { Badge } from "react-bootstrap";
import { FaVoteYea } from "react-icons/fa";
import "./header.css";

const Header = ({ conta = false, valor, contrato }) => {
  let limite = 100000 / 1e18 > valor ? false : valor;

  const getDimdim = async () => {
    await contrato.Saque();
  };
  return (
    <div className="header mx-5 mt-5">
      <div className="header-content">
        <div>
          {conta ? (
            <div>
              <h1>
                Você está conectado com: <Badge bg="dark">{conta}</Badge>
              </h1>

              {limite ? (
                <h3>Você tem: {limite} em moedas. Pode votar!</h3>
              ) : (
                <h3>
                  Para poder votar, por favor resgate suas moedas:{" "}
                  <a
                    href="#"
                    onClick={() => {
                      getDimdim();
                    }}
                  >
                    <Badge bg="dark">AQUI</Badge>
                  </a>
                  , a quantia necessária para poder votar!
                </h3>
              )}
            </div>
          ) : (
            <div>
              <h1>Vote com Cyber Urna!</h1>
              <h3>
                Cyber Urna é uma urna eletrônica com <span>Block Chain</span>.
                Conecte sua Wallet para votar!
              </h3>
            </div>
          )}

          <FaVoteYea size={150} color="#198754" />
        </div>
      </div>
    </div>
  );
};

export default Header;
