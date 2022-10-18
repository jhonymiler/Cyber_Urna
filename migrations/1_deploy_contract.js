const Urna_Contract = artifacts.require("Urna");

module.exports = function (deployer) {
  deployer.deploy(Urna_Contract, ["Bolsonaro", "Lula"]);
};
