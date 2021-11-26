require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember smile imitate prison foster struggle'; 
let testAccounts = [
"0xda2b85984da8866c53589df577ffcb3bbbd89aa0b4c552b3b55c023a105e54e0",
"0xc9c6d92b8303864a65fcd22bfc6a6b369b06de3bbf3e58dd46b0bb85d08f5cb1",
"0xe09f7b4370cee2eef445482408b4277a8d4e634b39d52469752ade0021355024",
"0xf9094bc3f8bd3503fb6023203ea0b0c487f02e2607da3eec7080b495192f2df4",
"0x172749625b3d777bba4e27b5e614742a0982d6504588227fd20b68a63ab5a846",
"0x5b4d634983fa100c1b4fe9ca01c7f1d8f1ff11a675e284133156dbc61a63055f",
"0x63c88264e08018c9bac782e6129ab60ec39e3693f0fd49bde38c832038af236e",
"0x7cabbb92b323d36ec631ac7d66f3eb431b7d3f2a84cc96660ae9387b03b6feb4",
"0xa0e3ae15be618f228b327bf9fd174f804368cd7ba325e39932584ef497f61e66",
"0x0922c158a76318f9a7e6a0df128f4f55df8ca6d8948f2d4e0063cc0610561098"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

