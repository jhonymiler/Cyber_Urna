import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { toHex, truncateAddress } from "@utils";

import { Badge } from "react-bootstrap";
import { FaVoteYea } from "react-icons/fa";
import "./header.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formatValor = (valor) => {
  return valor / 1e18;
};

const Header = ({ conta = false, provider, signer, Contrato }) => {
  const [balance, setBalance] = useState(0);
  const limite = formatValor(100000);

  const erro = (e) => {
    let msg = e.data.message.match(/revert (.*)/);
    return msg[1];
  };

  console.log(import.meta.env.VITE_PRIVATE_KEY);

  const getSaque = async () => {
    try {
      let privateKey = `${import.meta.env.VITE_PRIVATE_KEY}`;
      let wallet = new ethers.Wallet(privateKey, provider);
      let amountInEther = "0.006";
      let tx = {
        to: conta,
        value: ethers.utils.parseEther(amountInEther),
      };
      wallet.sendTransaction(tx).then((txObj) => {
        toast.success("Transação realizada!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
    } catch (e) {
      toast.error(erro(e), {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    if (conta) {
      provider.getBalance(conta).then((balance) => {
        const balanceInEth =
          limite > formatValor(balance)
            ? false
            : ethers.utils.formatEther(balance);
        setBalance(balanceInEth);
      });
    }
  });
  return (
    <div className="header mx-5 mt-5">
      <div className="header-content">
        <div>
          {conta ? (
            <div>
              <h1>
                Você está conectado com:{" "}
                <Badge bg="dark">{truncateAddress(conta)}</Badge>
              </h1>

              {balance ? (
                <h3>Você tem: {balance} em moedas. Pode votar!</h3>
              ) : (
                <h3>
                  Para poder votar, por favor resgate suas moedas:{" "}
                  <a
                    href="#"
                    onClick={() => {
                      getSaque();
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Header;
