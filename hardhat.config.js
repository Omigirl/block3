require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    // Specify all the networks you will work with here
    bnbtestnet: {
      url: "https://alpha-thrumming-shape.bsc-testnet.quiknode.pro/27e5bf1d39fb6a36c73b8586fb85aefa991d6a46/", // RPC from my quicknode
      accounts: ["42822a0e96e940c9bea72afd2535c051eacee2628f7822a7300ab3897ddfe1d1"],
      chainId: 97,
    },
  },
  etherscan: {
    apiKey: "FEQUDDF73RFD597Q55HT5TCZSNJ8YCWWQK", // your Etherscan API key
  },
};
