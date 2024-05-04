const hre = require("hardhat");

/** Set contract and collection name **/
const CONTRACT_NAME = "TierNFT";
const CONTRACT_ADDRESS = "0x9AEE7380AAD84EE65cB54d9a4c6f9ff5CF12b3cE";
const VALUE_TIER_0 = "0.01"; // in ethers/matic
const VALUE_TIER_1 = "0.02"; // in ethers/matic
const VALUE_TIER_2 = "0.05"; // in ethers/matic

/** Main deploy function **/
async function main() {
  const contractFactory = await hre.ethers.getContractFactory(CONTRACT_NAME);
  const contract = await contractFactory.attach(CONTRACT_ADDRESS);
  // Print our newly deployed contract address
  console.log("Attached contract ", await contract.getAddress());

  // Call the mint function for Tier 0
  let txn = await contract.mint({
    value: hre.ethers.parseEther(VALUE_TIER_0),
  });
  await txn.wait(); // Wait for the NFT to be minted
  console.log("Minted a Tier 0 NFT!");

  // Call the mint function for Tier 1
  txn = await contract.mint({
    value: hre.ethers.parseEther(VALUE_TIER_1),
  });
  await txn.wait(); // Wait for the NFT to be minted
  console.log("Minted a Tier 1 NFT!");

  // Call the mint function for Tier 2
  txn = await contract.mint({
    value: hre.ethers.parseEther(VALUE_TIER_2),
  });
  await txn.wait(); // Wait for the NFT to be minted
  console.log("Minted a Tier 2 NFT!");

  // Print total number of minted NFTs
  let totalSupply = await contract.totalSupply();
  console.log("Collection's new totalSupply: ", totalSupply);
}

/** Run Main function - Do not change **/
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
