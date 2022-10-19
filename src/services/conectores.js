import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://goerli.infura.io/v3/${import.meta.env.INFURA_API_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export const CoinbaseWallet = new WalletLinkConnector({
  url: `https://goerli.infura.io/v3/${import.meta.env.INFURA_API_KEY}`,
  appName: "web3-react-demo",
});
