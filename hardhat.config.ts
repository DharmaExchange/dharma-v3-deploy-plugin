import "hardhat-typechain";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-watcher";
import "./src/index.ts";

export default {
  defaultNetwork: "bsc",
  networks: {
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 5_000_000_000,
      accounts: [process.env.DHARMA_DEPLOY_KEY],
      // accounts: { mnemonic: mnemonic },
    },
    hardhat: {
      allowUnlimitedContractSize: false,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.BSCSCAN_API_KEY,
  },
  // solidity: {},
  watcher: {
    test: {
      tasks: [{ command: "test", params: { testFiles: ["{path}"] } }],
      files: ["./test/**/*"],
      verbose: true,
    },
  },
};
