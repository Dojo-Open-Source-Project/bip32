import { hmac } from '@noble/hashes/hmac';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { sha256 } from '@noble/hashes/sha256';
import { sha512 } from '@noble/hashes/sha512';
import { base58check, bech32 } from '@scure/base';

export { bech32 };

export const bs58check = base58check(sha256);

export function hash160(buffer: Uint8Array): Uint8Array {
  return ripemd160(sha256(buffer));
}

export function hmacSHA512(key: Uint8Array, data: Uint8Array): Uint8Array {
  return hmac(sha512, key, data);
}
