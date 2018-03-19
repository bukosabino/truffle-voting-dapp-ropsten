var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "you need to register in Infura for an Access Token.";
var mnemonic = "< twelve words you can find in metamask/settings/reveal seed words >";
var address = "your ropsten address with ether"

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey)
      },
      network_id: 3,
      from: address,
      gas: 4699712
    }
  }
};
