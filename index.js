// run `node index.js` in the terminal

const ethers = require('ethers');
// if you are using ESM style imports, use this line instead:
// import { ethers } from "ethers";

(async () => {
  const provider = new ethers.JsonRpcProvider(
    'https://flashy-little-spree.quiknode.pro/9317c0fd24fec591eb649b473dd50506c7ee79d7/'
  );
  const blockNum = await provider.getBlockNumber();
  console.log(blockNum);
})();
