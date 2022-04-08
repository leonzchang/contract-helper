# Template to deploy Smart Contract
A template to deploy smart contract to the target network.

# Getting Started
## Environment variables
```sh
cp .env-sample .env
```
configure your environment variables from the `.env` file.


## Configure truffle-config
configure `truffle-config.js` for `rpc-URL`, `chain_id` and `solidity compile version`.

## Write smart contract
note that solidity version in smart contract can not be lower than the setting in `truffle-config.js`.

## Installing and running
Install Truffle:
```sh
yarn global add truffle
```
Install dependencies for the project:
```sh
yarn install
```
compile smart contract:
```sh
truffle compile
```
note that compiled contract file name is the same as the contract name in solidity, `artifacts.require("compiled contract file name")` in `1_initial_migration.js` should  also be the same.

deploy smart contract:
```sh
truffle migrate
```