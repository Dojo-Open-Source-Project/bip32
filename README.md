# @samouraiwallet/bip32

This is a fork of the [original bip32 library](https://github.com/bitcoinjs/bip32) with minor changes:
- codebase updated to use UInt8Array instead of Buffer - thus making this library browser-compatible without any shims
- package type changed to ESModule instead of CommonJS
- switched from `typeforce` to `ow` for better type safety
- updated tests to reflect these changes

## Original Readme

A [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki) compatible library written in TypeScript with transpiled JavaScript committed to git.


## Example

TypeScript

``` typescript
import BIP32Factory from 'bip32';
import * as ecc from 'tiny-secp256k1';
import { BIP32Interface } from 'bip32';
// You must wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc);

const node: BIP32Interface = bip32.fromBase58('xprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkVvvNKmPGJxWUtg6LnF5kejMRNNU3TGtRBeJgk33yuGBxrMPHi');

const child: BIP32Interface = node.derivePath('m/0/0');
// ...
```

NodeJS

``` javascript
const ecc = require('tiny-secp256k1')
const { BIP32Factory } = require('bip32')
// You must wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc)

const node = bip32.fromBase58('xprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkVvvNKmPGJxWUtg6LnF5kejMRNNU3TGtRBeJgk33yuGBxrMPHi')

const child = node.derivePath('m/0/0')
```

## LICENSE [MIT](LICENSE)
A derivation (and extraction for modularity) of the `HDWallet`/`HDNode` written and tested by [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) contributors since 2014.
