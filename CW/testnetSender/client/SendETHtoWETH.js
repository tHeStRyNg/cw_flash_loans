const { ethers } = require("ethers");

// TESTNET PROVIDER
const providerTestnet = new ethers.providers.JsonRpcProvider(
  "https://eth-sepolia.g.alchemy.com/v2/ZcGtZcla31gH01TpayMUOjUAFBvJ51BK"
);

// CREATE SIGNER
const myAddress = "0xC7eF873163173913691Baed7E54875bBCfDDa6a3";
const privateKey =
  "0xb15239ee91fd5fd6c7f8be7f80cb26f7780cef6264fe41373c9eb048e5accfc3";
const walletSigner = new ethers.Wallet(privateKey, providerTestnet);

const exchangeETH = async () => {
  const sendValueHuman = "0.01"; // 33.57 USD on 06.04.2024
  const gasPrice = await providerTestnet.getGasPrice();
  const nonce = 212; // web3.eth.getTransactionCount(myAddress)
  const txBuild = {
    from: myAddress, // from,
    to: "0x4C0A90E1370A91269546B752Bca379A2583c12D1", // to (WETH on Sepolia ETH TestNet 0xb16F35c0Ae2912430DAc15764477E179D9B9EbEa),
    value: ethers.utils.parseEther(sendValueHuman), // value,
    nonce: nonce, // nonce,
    gasLimit: 100000, // gas limit,
    gasPrice: gasPrice, // gas price
  };

  // SEND Transaction
  const txSend = await walletSigner.sendTransaction(txBuild);

  console.log("");
  console.log("TX SEND");
  console.log(txSend);
};

exchangeETH();
