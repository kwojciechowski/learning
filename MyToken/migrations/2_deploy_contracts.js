var ApexToken = artifacts.require("ApexToken");

module.exports = function(deployer) {
  deployer.deploy(ApexToken);
};