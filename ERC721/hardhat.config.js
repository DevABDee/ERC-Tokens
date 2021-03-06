require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.8",

  networks: {
    rinkeby: {
      url: [ALCHEMY_API_KEY],
      accounts: [RINKEBY_PRIVATE_KEY],
      // chainId: 4,
    }
  }
};

