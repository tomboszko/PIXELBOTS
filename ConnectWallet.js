
// Script to manage the connection to the user's wallet

// Import Web3.js from a CDN (Content Delivery Network)
const web3 = new Web3(window.ethereum);

// Function to update the account balance, wallet ID, and button text
async function updateInfo() {
    try {
        // Check if MetaMask or a compatible provider is available
        if (!window.ethereum) {
            console.log("Non-Ethereum browser detected. Consider trying MetaMask!");
            alert("Non-Ethereum browser detected. Consider trying MetaMask!");
            return;
        }

        // Request the connected accounts
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });

        if (accounts.length === 0) {
            console.log("No account connected");
            resetUI();
            return;
        }

        const account = accounts[0];
        console.log("Connected account: ", account);

        // Define a mapping from network IDs to names
        const networkIdToName = {
            "1": "Mainnet",
            "3": "Ropsten",
            "4": "Rinkeby",
            "5": "Goerli",
            "42": "Kovan",
            "11155111": "Sepolia Testnet" // this the network used for testing
            // Add more if needed
        };

        // Get the network ID
        const networkId = await web3.eth.net.getId();

        // Get the network name from the mapping, or 'Unknown' if the ID is not in the mapping
        const networkName = networkIdToName[networkId] || "Unknown";

        // Update the text content of the 'networkDisplay' element
        document.getElementById('networkDisplay').textContent = `Network: ${networkName}`;

        // Get the account's balance in Wei
        const balanceWei = await web3.eth.getBalance(account);
        console.log("Balance: ", balanceWei);
        
        // Convert Wei to Ether and display with only two digits after the decimal point
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
        document.getElementById('balanceDisplay').innerText = `Balance: ${parseFloat(balanceEth).toFixed(2)} ETH`;

        // Display last three digits of wallet ID
        let lastThreeDigits = account.slice(-3);
        document.getElementById('walletIdDisplay').innerText = `Wallet ID: ...${lastThreeDigits}`;
        document.getElementById('walletIdDisplay').title = `Wallet ID: ${account}`;

        // Update button text
        document.getElementById('connectButton').innerText = 'Connected';

    } catch (error) {
        console.error("Error updating balance: ", error);
    }
}

// Function to reset UI elements
function resetUI() {
    document.getElementById('connectButton').innerText = 'Connect Wallet';
    document.getElementById('walletIdDisplay').innerText = 'Wallet ID: ...';
    document.getElementById('balanceDisplay').innerText = 'Balance: 0 ETH';
    document.getElementById('networkDisplay').innerText = '';
}

// Event listener for the connect button
document.getElementById('connectButton').addEventListener('click', async () => {
    try {
        if (!window.ethereum) {
            console.log("Non-Ethereum browser detected. Consider trying MetaMask!");
            return;
        }
        // Request the user's accounts
        let accounts = await window.ethereum.request({ method: 'eth_accounts' });

        if (accounts.length > 0) {
            alert("Wallet is already connected");
            return;
        }

        try {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            updateInfo();
        } catch (error) {
            if (error.code === 4001) {
                // User rejected the request
                console.log("User denied account access");
            } else {
                console.error("Error requesting account access: ", error);
            }
        }

    } catch (error) {
        console.error("Error during account access: ", error);
    }
});

// Listen for account change events
window.ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length > 0) {
        updateInfo();
    } else {
        console.log("Wallet disconnected");
        resetUI();
    }
});

// Listen for network change events
window.ethereum.on('chainChanged', (chainId) => {
    window.location.reload(); // Or call updateInfo() 
});

// Listen for the 'disconnect' event
window.ethereum.on('disconnect', () => {
    console.log('MetaMask is disconnected');
    resetUI();
});

// Call updateInfo when the script runs
updateInfo();

