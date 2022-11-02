const hre = require("hardhat");
import {
    expandTo18Decimals,
    expandTo6Decimals,
  } from "../test/utilities/utilities";

async function main() {

    console.log("after");
  
    await hre.run("verify:verify", {
        address: "0xf539187098368B02915D0d8aB538a30D7Bc66147",
        constructorArguments: [],
        contract: "contracts/OwnedUpgradeabilityProxy.sol:OwnedUpgradeabilityProxy",
      });
    
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});