# PIXELBOTS

## Personal project 

Creation (mint) of a NFT's serie to learn about smart contracts and blockchain interactions.

🤖 I want to make it fun so why not some cute pixel art robots ?

### I will update the readme as I implement features

Deployed project [PIXELBOTS](https://tomboszko.github.io/PIXELBOTS/)


## 1 Ethereum Wallet Connection

This is the first step of the project, it allow user to connect his wallet to the site and display wallet ID and account balance.

### Features

- Connect to MetaMask wallet
- Display wallet ID
- Display wallet balance in Ether
- Display Network ID
- Copy to clipboard when wallet ID clicked


## Instructions

### to mint a NFT, you'll need a Metamask wallet connected to Sepolia testnet with a few ETH in it:

I choose to only work with Metamask wallet because it's "simple & efficace" so:

Here's the link to download and to the documentation for Metamask wallet [Metamask.io](https://metamask.io/)

⚠️ **When asking to write your seedphrase, make it carefully because it's your PRIVATE  key to access wallet** ⚠️

The NFT will be minted on Sepolia Testnet, it's a test blockchain who mimic Ethereum Mainnet.
If you want to interact with Sepolia, you need to add it to your wallet, 2 options:

1 Go to [Alchemy](https://www.alchemy.com/overviews/sepolia-testnet) to see docs and how to add manually Sepolia to your wallet.

OR

2 Got to [Chainlist](https://chainlist.org/?search=Sepolia&testnets=true) connect your wallet to the site, then search(including testnets) for Sepolia  with `id:11155111` then add it to your wallet.

You will need some ETH in your wallet to pay the GAS price of minting, hopefully ETH on tesnet are free, you can connect your wallet at this faucet to get some ETH [sepoliafaucet](https://sepoliafaucet.com/)

If it doesn't work, send me your Wallet ID and I'll send you a few ETH.


## 2 Creation of collection

I added a new challenge: send a prompt to create pixelbot picture to chatgpt then, add it to metadata of the NFT minted.

<span style="color:red">This step is actually in process, stay tuned.</span>

creation of metadata processing...

## Technologies Used

- JavaScript
- HTML
- CSS
- OpenAI API 
  
- **Web3.js**
  
  `npm install web3@^4.2.2`

    Web3.js is a collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC, or WebSocket. It's used to interact with the Ethereum blockchain, send transactions, interact with smart contracts, and more.
  
- **OpenZeppelin Contracts**
  
  `npm install @openzeppelin/contracts@^5.0.0`
  
    OpenZeppelin Contracts is a library for secure smart contract development. It provides implementations of standards like ERC20 and ERC721 which you can deploy as-is or extend to suit your         needs, as well as Solidity components to build custom contracts and more complex decentralized systems.
  
- **Solidity Compiler (solc)**
  
  `npm install solc@^0.8.20`

    The Solidity Compiler (solc) is used to compile Solidity source code into a format that can be run on the Ethereum Virtual Machine (EVM). It's necessary for deploying smart contracts to the       Ethereum blockchain.

## How to Use

1. Open the web page in a browser.
2. Click on the 'Connect Wallet' button.
3. If MetaMask is installed and set up, you will be prompted to connect your wallet.
4. Once connected, your wallet ID, balance and Network ID will be displayed on the page.

## Future Improvements

- Add support for other Ethereum wallet providers.
- improve security
- Improve UI/UX design
- Add minting function
- Display all the robots pictures as animated gif /modal
- display minted robots in other view with ownerID
- display the count of robots minted
- ...

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.






