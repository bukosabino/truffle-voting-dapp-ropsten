# Voting example dapp on Truffle Framework.

This is an example dapp on Ethereum Ropsten testnet using Truffle Framework. If you are not familiarized with

We develop a dapp where the users can create proposals and vote them. Of course, they can vote once per proposal with the options in support, against or absence.

# Preconditions to development

This dapp is based on the official tutorial to get start with Truffle Framework: http://truffleframework.com/tutorials/pet-shop and official tutorial to deploy on ropsten network: http://truffleframework.com/tutorials/using-infura-custom-provider. So, I strongly recommend to read it before.

You need to pay attention to configure and run Ganache (for a local blockchain) and MetaMask (for a client web blockchain).

# Deployment on Ropsten Ethereum testnet

* git clone https://github.com/bukosabino/truffle-voting-dapp-ropsten.git
* cd truffle-voting-dapp
* npm install -g truffle
* npm install
* truffle compile
* Configure settings variables to ropsten in truffle.js file:
  * var infura_apikey = "you need to register in Infura for an Access Token.";
  * var mnemonic = "< twelve words you can find in metamask/settings/reveal seed words >";
  * var address = "";
* truffle migrate --reset --network ropsten
  * Note: If you receive an error Error: Exceeds block gas limit, you may need to manually set the gas limit for your contract. See the Truffle Configuration documentation for details.
* npm run test

# Deployment on Ethereum local network (Ganache)

* git clone https://github.com/bukosabino/truffle-voting-dapp-ropsten.git
* cd truffle-voting-dapp
* npm install -g truffle
* npm install
* truffle compile
* truffle migrate --reset --network development
* npm run dev

# Credits:

Developed by Bukosabino at Lecrin Technologies - http://lecrintech.com

We are glad to receive any contribution, idea or feedback.

# Donation Address

* ETH: 0x96d6e3823b655602cc643996c1ada8b6b532f0c0
* DASH: XrXUic1huVaFfSqDygveADwNAbdutz41VG
