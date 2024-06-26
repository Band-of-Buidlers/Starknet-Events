# Starknet Events

Project developed for ETH Global 2024 StarkHack hackathon:  
Starknet Events is a protocol deployed on Starknet and a dApp dedicated to foster participation to Starknet events using  
a "stake-to-register" mechanism.

See https://ethglobal.com/events/starkhack

## CONTRIBUTE TO THE PROJECT

### Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)
- [Scarb v2.5.4](https://docs.swmansion.com/scarb/)
- [Starknet Foundry](https://github.com/foundry-rs/starknet-foundry) -> is it v0.23.0 or v0.25.0, though? their doc mentions both -\_-'

### Quickstart

To get started, follow the steps below:

1. Clone this repo and install dependencies

```bash
git clone https://github.com/Band-of-Buidlers/Starknet-Events --recurse-submodules
cd Starknet-Events
yarn install
```

P.S: I'm not sure that `-- recurse-submodels` flag is needed...

2. Prepare your environment variables.

Because we are deploying on Sepolia, you need to fill the envs related to sepolia testnet with your own contract address and private key:

```bash
cp packages/snfoundry/.env.example packages/snfoundry/.env
```

There, in your `packages/snfoundry/.env`, fill-up the "ACCOUNT_ADDRESS_SEPOLIA" & "PRIVATE_KEY_SEPOLIA" with your own account.

**Note:** If you are on sepolia or mainnet, for a better user experience on your app, you can get a dedicated RPC from [Infura dashboard](https://www.infura.io/). A default is provided [here](https://github.com/Quantum3-Labs/scaffold-stark-2/tree/main/packages/nextjs/.env.example), in order to use this, you have to run `cp packages/nextjs/.env.example packages/nextjs/.env.local`

1. On a first terminal, deploy the sample contract:

```
yarn deploy --network {NETWORK_NAME} // when NETWORK_NAME is not specified, it defaults to "devnet"
```

**Note:** To use sepolia tesnet, you have to set {NETWORK_NAME} to `sepolia` (`mainnet` also available).

This command deploys a sample smart contract to the local network. The contract is located in `packages/snfoundry/contracts/src` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/snfoundry/scripts-ts/deploy.ts` to deploy the contract to the network. You can also customize the deploy script.

2. On a second terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

## Useful Documentation

Visit [scaffold stark docs](https://www.docs.scaffoldstark.com/) to learn how to start building with Scaffold-Stark 2.

To know more about its features, check out our [website](https://scaffoldstark.com)
