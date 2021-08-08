const Dao = artifacts.require("Dao");
const Halogen = artifacts.require("Halogen");
const FundProject = artifacts.require("FundProject");
const TimeLockedWallet = artifacts.require("TimeLockedWallet");
const TimeLockedWalletFactory = artifacts.require("TimeLockedWalletFactory");
const token = artifacts.require("token");

module.exports = function (deployer) {
    deployer.deploy(Dao);
    deployer.deploy(Halogen);
    deployer.deploy(FundProject);
    deployer.deploy(TimeLockedWallet);
    deployer.deploy(TimeLockedWalletFactory);
    deployer.deploy(token);
};


