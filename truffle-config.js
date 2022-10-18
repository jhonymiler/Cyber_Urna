require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { INFURA_API_KEY, MNEMONIC } = process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
      network_id: "1",
      gas: 30000000,
      gasPrice: 300000,
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};
