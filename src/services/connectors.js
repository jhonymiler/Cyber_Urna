import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337],
});

console.log(import.meta.env.VITE_INFURA_API_KEY);

const walletconnect = new WalletConnectConnector({
  rpcUrl: `https://goerli.infura.io/v3/${import.meta.env.VITE_INFURA_API_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const walletlink = new WalletLinkConnector({
  url: `https://goerli.infura.io/v3/${import.meta.env.VITE_INFURA_API_KEY}`,
  appName: "cyber-urna",
});

export const connectors = {
  Injected: injected,
  WalletConnect: walletconnect,
  CoinbaseWallet: walletlink,
};
