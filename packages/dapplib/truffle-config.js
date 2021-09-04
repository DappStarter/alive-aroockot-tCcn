require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski stock rice sad unaware hidden knife army genre'; 
let testAccounts = [
"0x04d16c976e01263d2d5341a1eba7b780a30bcfadbeefa9dd18c8f71efdf69250",
"0x13bdbcb62fb408bd4d6adf044a7aebb7dc0e15686280ea10bf61f157aa66991e",
"0x69e804b3f5031af25c2c23cd0df9c9c3bb2d96f31471da1d9f21f8a67299811c",
"0x602f514910df362a4d817405b2adff6332c433ec59a32bedbab9be5429186759",
"0xe832ef64f164ad6acc1288f8860e270b704202fe889997b9a899251ddbbbe3b0",
"0x6a413b61f502003702b9c71b9c59668d844155a1ffeed110510809685000ca8b",
"0x1a24b7fb125c002ecda165233103a3fab7fd37e0468e114bef73c3ce1ea083cd",
"0x897fcc295ffef4f41843cc2690674c2f3b3a4ca19a95f46b33b7872498180737",
"0xcf89d5551b138bf0029435e0c8676aaa1fad8a9991e7069cea67d1bd65465a8f",
"0x666146ea22cac7fc48214ede7e5009f53c1274ba324c93f550cba06f47d14e39"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

