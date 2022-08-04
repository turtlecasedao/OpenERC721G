require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

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
  asReporter: {
    token: 'ETH',
    currency: 'USD',
    coinmarketcap: "01bc3d17-df19-4124-8478-24ba2e4bb89c",
    enabled: process.env.REPORT_GAS ? true : false
  },
  plugins: ['solidity-coverage'],
};
