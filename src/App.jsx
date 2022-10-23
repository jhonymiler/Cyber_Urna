import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import Bids from "./components/bids";

import { useWeb3React } from "@web3-react/core";
import ModalConectores from "./components/modalconectores";
import { useEffect, useState } from "react";
import { connectors } from "./services/connectors";
import { ethers } from "ethers";
import { ContractABI, contractAddress } from "./services/contrato";

function App() {
  const { account, activate, deactivate, active } = useWeb3React();
  const [modalShow, setShow] = useState(false);

  const refreshState = () => {
    window.localStorage.setItem("provider", undefined);
  };

  const disconnect = () => {
    refreshState();
    deactivate();
  };

  useEffect(() => {
    const providerStorage = window.localStorage.getItem("provider");

    if (providerStorage) {
      activate(connectors[providerStorage]);
    }
  }, []);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const Contrato = new ethers.Contract(contractAddress, ContractABI, signer);

  return (
    <>
      <Navbar setShow={setShow} active={active} disconnect={disconnect} />
      <Header conta={account} provider={provider} Contrato={Contrato} />
      <Bids Contrato={Contrato} />
      <Footer />
      <ModalConectores show={modalShow} onHide={() => setShow(false)} />
    </>
  );
}

export default App;
