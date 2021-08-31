const secureLogin = artifacts.require("secureLogin");

module.exports = function (deployer) {
  deployer.deploy(secureLogin);
};
