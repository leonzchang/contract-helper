const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const MNEMONIC = process.env.MNEMONIC
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const BINAINCE_TESTNET_RPC_URL = process.env.BINAINCE_TESTNET_RPC_URL

module.exports = {
  // Configure chain rpc-URL and chain_id
  networks: {
    development: {
      provider: () => new HDWalletProvider(MNEMONIC, BINAINCE_TESTNET_RPC_URL),//node rpcUrl
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your solidity compilers
  compilers: {
    solc: {
      version: "^0.8.0", // A version or constraint - Ex. "^0.5.0" 
    }
  }
}