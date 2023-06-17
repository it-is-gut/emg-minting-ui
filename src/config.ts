import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Devnet) as WalletAdapterNetwork;
// const network = WalletAdapterNetwork.Devnet;
export const rpcHost =
  process.env.NEXT_PUBLIC_RPC_HOST || clusterApiUrl(network);

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "Dw1UaK6jkDPnUNjoeo7RrmWPDq31eGWe8u6tLspgATf1"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined; // undefined means default

export const collectionName = process.env.NEXT_PUBLIC_COLLECTION_TITLE;
export const twitter = process.env.NEXT_PUBLIC_TWITTER_URL
export const website = process.env.NEXT_PUBLIC_WEBSITE_URL; 
export const discord = process.env.NEXT_PUBLIC_DISCORD_URL;
export const description = process.env.NEXT_PUBLIC_COLLECTION_DESCRIPTION;