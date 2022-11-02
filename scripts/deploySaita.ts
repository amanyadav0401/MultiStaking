import { SignerWithAddress } from "../node_modules/@nomiclabs/hardhat-ethers/signers";
import { ethers, network } from "hardhat";
import {
  expandTo18Decimals,
  expandTo6Decimals,
} from "../test/utilities/utilities";
import {
  SaitaStaking,
} from "../typechain";

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {
  // We get the contract to deploy
  const staking1 = await ethers.getContractFactory("SaitaStaking");
  const staking = await staking1.deploy();
  await sleep(4000);
  console.log("Saita Deployed", staking.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //SaitaAddress - 0x03CcfbE179286f8EDBd0d7660dd848a475960427 
  //SaitaAddress BSC - 0x6430dDbEF3511b18D933BF4f29E25D62Bb35b715 
