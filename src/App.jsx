import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import Bids from "./components/bids";

import { useWeb3React } from "@web3-react/core";
import ModalConectores from "./components/modalconectores";
import { useEffect, useState } from "react";
import { connectors } from "./services/connectors";
import { networkParams } from "./services/networks";
import { toHex, truncateAddress } from "./utils";

import { ethers } from "ethers";
import { ContractABI, contractAddress } from "./services/contrato";

function App() {
  const { library, chainId, account, activate, deactivate, active } =
    useWeb3React();
  const [balance, setBalance] = useState("");
  const [UrnaContrato, setContrato] = useState();

  const [modalShow, setShow] = useState(false);
  const [network, setNetwork] = useState(undefined);

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) {
      activate(connectors[provider]);
      library?.getBalance(account).then((result) => {
        setBalance(result / 1e18);
      });
    }
  }, []);

  const refreshState = () => {
    window.localStorage.setItem("provider", undefined);
    setNetwork("");
    // setMessage("");
    // setSignature("");
    // setVerified(undefined);
  };

  const disconnect = () => {
    refreshState();
    deactivate();
  };

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[toHex(network)]],
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  return (
    <>
      <Navbar setShow={setShow} active={active} disconnect={disconnect} />
      <Header
        conta={truncateAddress(account)}
        valor={balance}
        contrato={UrnaContrato}
      />
      <Bids />
      <Footer />
      <ModalConectores show={modalShow} onHide={() => setShow(false)} />
    </>
  );
}

export default App;
