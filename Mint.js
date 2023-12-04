// Ensure you have an instance of Web3 initialized and connected to MetaMask
const web3 = new Web3(window.ethereum);

// The address of the smart contract
const contractAddress = '0xYourContractAddress';

// The ABI (Application Binary Interface) of the smart contract


// Create a new instance of the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// The address of the account from which you want to create the NFTs
const accountAddress = '0xYourAccountAddress';

// Call the NFT creation function
contract.methods.createNFTSeries('Your NFT Name', 'Your NFT Symbol', 'Your NFT URI').send({ from: accountAddress })
    .on('transactionHash', function(hash){
        console.log('transactionHash', hash);
    })
    .on('receipt', function(receipt){
        console.log('receipt', receipt);
    })
    .on('error', function(error, receipt) {
        console.log('error', error);
    });