import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import Bids from "./components/bids";

const Conectores = {
  CoinbaseWallet: new WalletLinkConnector({
    url: `https://goerli.infura.io/v3/${import.meta.env.INFURA_API_KEY}`,
    appName: "Web3-react Demo",
    supportedChainIds: [1, 3, 4, 5, 42],
  }),
  WalletConnect: new WalletConnectConnector({
    rpcUrl: `https://goerli.infura.io/v3/${import.meta.env.INFURA_API_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
  }),
  Injected: new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  }),
};

function App() {
  const { activate, deactivate } = useWeb3React();

  return (
    <>
      <Navbar
        conectores={Conectores}
        ativate={activate}
        deactivate={deactivate}
      />
      <Header />
      <Bids
        conectores={Conectores}
        ativate={activate}
        deactivate={deactivate}
      />
      <Footer />
    </>
  );
}

export default App;
