require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { VITE_INFURA_API_KEY, VITE_MNEMONIC } = process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    goerli: {
      provider: () =>
        new HDWalletProvider(
          VITE_MNEMONIC,
          `https://goerli.infura.io/v3/${VITE_INFURA_API_KEY}`
        ),
      network_id: "5",
      gas: 29970705,
      gasPrice: 81345944820,
      networkCheckTimeout: 999999,
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};
