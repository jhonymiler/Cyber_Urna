import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import coinbase_img from "@assets/imgs/coinbase.png";
import wallet_img from "@assets/imgs/WalletConnect.png";
import metamask_img from "@assets/imgs/metamask.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { connectors } from "@services/connectors";

import { useWeb3React } from "@web3-react/core";

function ModalConectores({ show, onHide }) {
  const { activate } = useWeb3React();

  const setProvider = (type) => {
    window.localStorage.setItem("provider", type);
  };

  return (
    <>
      <Modal className="" show={show} onHide={onHide}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Selecione sua wallet preferida</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-grid gap-2">
          <Button
            variant="light"
            size="lg"
            className="my-1"
            onClick={() => {
              activate(connectors.CoinbaseWallet);
              setProvider("CoinbaseWallet");
              onHide(false);
            }}
          >
            <LazyLoadImage src={coinbase_img} width={50} alt="" /> Coinbase
          </Button>
          <Button
            variant="light"
            size="lg"
            className="my-1"
            onClick={() => {
              activate(connectors.WalletConnect);
              setProvider("WalletConnect");
              onHide(false);
            }}
          >
            <LazyLoadImage src={wallet_img} width={50} alt="" />
            Wallet Connetc
          </Button>
          <Button
            variant="light"
            size="lg"
            className="my-1"
            onClick={() => {
              activate(connectors.Injected);
              setProvider("Injected");
              onHide(false);
            }}
          >
            <LazyLoadImage src={metamask_img} width={50} alt="" /> Metamask
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalConectores;
