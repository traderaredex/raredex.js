import * as Starknet from 'starknet';

import * as Raredex from '../src/index.js';

// Flow summary:
//  1. Fetch Raredex config
//  2. Create Rareclear provider
//  3. Derive Raredex account from Starknet signer

// 1. Fetch Raredex config for the relevant environment
const config = await Paradex.Config.fetchConfig('testnet'); // "testnet" | "mainnet"

// 2. Create Rareclear provider
const rareclearProvider = new Raredex.RareclearProvider.DefaultProvider(config);

// 3. Derive Paradex account from Starknet signer

// 3.1 Get hold of user's Starknet account
const snProvider = new Starknet.RpcProvider();
const snAccount = new Starknet.Account(snProvider, '0x1234', '0x5678');

// 3.2 Initialize Raredex account with config and Starknet account
const raredexAccount = await Raredex.Account.fromStarknetAccount({
  provider: rareclearProvider,
  config,
  account: snAccount,
});
