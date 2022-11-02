const hre = require("hardhat");
import {
    expandTo18Decimals,
    expandTo6Decimals,
  } from "../test/utilities/utilities";

async function main() {

    console.log("after");
  
    await hre.run("verify:verify", {
        address: "0x6430dDbEF3511b18D933BF4f29E25D62Bb35b715",
        constructorArguments: [],
        contract: "contracts/SaitaStakeII.sol:SaitaStaking",
      });
    
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});