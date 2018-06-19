const token = artifacts.require("CustomToken");

module.exports = function(deployer) {
  deployer.deploy(token)
};
