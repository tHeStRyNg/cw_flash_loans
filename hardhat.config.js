require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.5.5" },
      { version: "0.6.6" },
      { version: "0.8.8" },
    ],
  },
  networks: {
    hardhat: {
      mainnet_eth_fork: {
        url: "https://eth-mainnet.g.alchemy.com/v2/9K-w-ngLiBNqwHbim87y6o5NzaxSlSG7",
        accounts: [
          "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
        ],
      },
    testnet_eth: {
      url: "https://eth-sepolia.g.alchemy.com/v2/ZcGtZcla31gH01TpayMUOjUAFBvJ51BK",
      chainId: 11155111,
      accounts: [
        "0xb15239ee91fd5fd6c7f8be7f80cb26f7780cef6264fe41373c9eb048e5accfc3",
      ],
    },
    testnet_bsc: {
      url: "https://bsc-testnet-rpc.publicnode.com",
      chainId: 97,
      accounts: [
        "0xb15239ee91fd5fd6c7f8be7f80cb26f7780cef6264fe41373c9eb048e5accfc3",
      ],
    },
    mainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/9K-w-ngLiBNqwHbim87y6o5NzaxSlSG7",
      chainId: 1,
      accounts: [
        "0xe027e853c7e47d8875973ec0b2fe59a7e162f52935c0051dda5ee845e97d273b",
      ],
    },
  },
 },
};
