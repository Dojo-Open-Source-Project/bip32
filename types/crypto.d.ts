import { bech32 } from '@scure/base';
export { bech32 };
export declare const bs58check: import("@scure/base").BytesCoder;
export declare function hash160(buffer: Uint8Array): Uint8Array;
export declare function hmacSHA512(key: Uint8Array, data: Uint8Array): Uint8Array;
