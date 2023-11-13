# NFT minting 

## Personal project 

Creation (mint) of a NFT series to learn about smart contracts and blockchain interactions

## I will update the readme as I implement features

Next step is to create a small collection of pixel art robots and allow user to mint.

Deployed project [NFT minting](https://tomboszko.github.io/Token/)

## 1 Ethereum Wallet Connection

This is the first step of the project, it allow user to connect his wallet to the site and display wallet ID and account balance.

I choose to only work with Metamask wallet because it's really user friendly and simple to install.
To interact with the site you need to install Metamask 

Here's the link to download and to the documentation for Metamask wallet [Metamask.io](https://metamask.io/)

**WARNING: When asking to write your seedphrase, make it carefully because it's your PRIVATE  key to access wallet.**

### Features

- Connect to MetaMask wallet
- Display wallet ID
- Display wallet balance in Ether
- Display Network ID
- Copy to clipboard when wallet ID clicked

## 2 Creation of collection

<span style="color:red">This step is actually in process, stay tuned.</span>

## Technologies Used

- JavaScript
- HTML
- CSS
- Web3.js `npm install web3@^4.2.2`

    Web3.js is a collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC, or WebSocket. It's used to interact with the Ethereum blockchain, send        transactions, interact with smart contracts, and more.
  
- OpenZeppelin Contracts `npm install @openzeppelin/contracts@^5.0.0`
  
    OpenZeppelin Contracts is a library for secure smart contract development. It provides implementations of standards like ERC20 and ERC721 which you can deploy as-is or extend to suit your         needs, as well as Solidity components to build custom contracts and more complex decentralized systems.
  
- Solidity Compiler (solc) `npm install solc@^0.8.20`

    The Solidity Compiler (solc) is used to compile Solidity source code into a format that can be run on the Ethereum Virtual Machine (EVM). It's necessary for deploying smart contracts to the       Ethereum blockchain.

**NOTE:** Ensure that you run the last version for all these depedencies.

## How to Use

1. Open the web page in a browser.
2. Click on the 'Connect Wallet' button.
3. If MetaMask is installed and set up, you will be prompted to connect your wallet.
4. Once connected, your wallet ID and balance will be displayed on the page.

## Future Improvements

- Add support for other Ethereum wallet providers.
- Improve UI/UX design.
- Add more wallet-related features, such as transaction history.
- Add minting function
- add current network/blockain
- Allow user to copy/past wallet ID
- Display all the robots pictures as animated gif
- display minted robots in other view
- dispaly the count of robots minted
- ...

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

No license, This project is for educational purpose only.





