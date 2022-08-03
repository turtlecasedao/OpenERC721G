require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const { API, PRIVATE_KEY, NETWORK } = process.env;

if (process.env.REPORT_GAS) {
  require('hardhat-gas-reporter');
}

if (process.env.REPORT_COVERAGE) {
  require('solidity-coverage');
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 15000,
      },
    },
  },
  defaultNetwork: NETWORK,
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    },
    rinkeby: {
      url: API,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  gasReporter: {
    token: 'ETH',
    currency: 'USD',
    coinmarketcap: process.env.COINMARKET_KEY,
    enabled: process.env.REPORT_GAS
  },
  mocha: {
    timeout: 100000000
  },
  plugins: ['solidity-coverage'],
};
