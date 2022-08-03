require("dotenv").config()
const hh = require("hardhat");
const PRIVATE_KEY = process.env.PRIVATE_KEY
const NETWORK = process.env.NETWORK
const API_KEY = process.env.API_KEY

const provider = new hh.ethers.providers.InfuraProvider(NETWORK, API_KEY);
// make sure, your exact abi directory is correct
const abi = require("../artifacts/contracts/ERC721G.sol/ERC721G.json").abi
const contractAddress = process.env.ERC721_ADDR;
const bigbroAddress = process.env.ORACLE_ADDR;
const contract = new hh.ethers.Contract(contractAddress, abi, provider)
const wallet = new hh.ethers.Wallet(PRIVATE_KEY, provider)

async function enableGuard() {
    const contractWithSigner = contract.connect(wallet);
    const tx = await contractWithSigner.enableGuardMode(bigbroAddress);
    await tx.wait();
    console.log("enable guard success:", tx.hash);
}

async function main() {
    await enableGuard();
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });