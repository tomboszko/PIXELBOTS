console.log('token.js loaded');

async function createToken(web3) {
    // Get the ABI and bytecode of the compiled contract
    // You need to provide these values. They can't be read from a file in the browser.
    const contractABI = /* ABI goes here */;
    const contractBytecode = /* Bytecode goes here */;

    // Create the contract object
    const contract = new web3.eth.Contract(contractABI);

    // Create the transaction for contract deployment
    const deployTransaction = contract.deploy({
        data: contractBytecode,
    });

    // Get the accounts
    const accounts = await web3.eth.getAccounts();

    // Send the transaction
    const receipt = await deployTransaction.send({
        from: accounts[0],
        gas: 3000000,
    });

    console.log(`Contract deployed at address: ${receipt.options.address}`);
}

window.addEventListener('load', async () => {
    console.log('Starting contract creation...');
    
    // Modern dapp browsers...
    if (window.ethereum) {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
            createToken(web3);
        } catch (error) {
            // User denied account access...
            console.error("User denied account access")
        }
    }


    // Legacy dapp browsers...
    else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log('Injected web3 detected.');
        createToken(web3, initialSupply, tokenName, tokenSymbol);
    }
    // Fallback to localhost; use dev console port by default...
    else {
        console.log('No web3? You should consider trying MetaMask!');
    }
});