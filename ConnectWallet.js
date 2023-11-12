// Import Web3.js from a CDN (Content Delivery Network)
const web3 = new Web3(window.ethereum);

// Function to update the account balance, wallet ID, and button text
async function updateInfo() {
    try {
        // Check if MetaMask or a compatible provider is available
        if (!window.ethereum) {
            console.log("Non-Ethereum browser detected. Consider trying MetaMask!");
            return;
        }

        // Request the connected accounts
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });

        if (accounts.length === 0) {
            console.log("No account connected");
            document.getElementById('connectButton').innerText = 'Connect Wallet';
            return;
        }

        const account = accounts[0];
        console.log("Connected account: ", account);
        

        // Get the account's balance in Wei
        const balanceWei = await web3.eth.getBalance(account);
        console.log("Balance: ", await web3.eth.getBalance(account));
        
        // Convert Wei to Ether and display with only two digits after the decimal point
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
        document.getElementById('balanceDisplay').innerText = `Balance: ${parseFloat(balanceEth).toFixed(2)} ETH`;

        // Display wallet ID
        document.getElementById('walletIdDisplay').innerText = `Wallet ID: ${account}`;

        // Update button text
        document.getElementById('connectButton').innerText = 'Connected';
    } catch (error) {
        console.error("Error updating balance: ", error);
    }
}

// Call updateInfo when the script runs
updateInfo();

// Event listener for the connect button
document.getElementById('connectButton').addEventListener('click', async () => {
    try {
        if (!window.ethereum) {
            console.log("Non-Ethereum browser detected. Consider trying MetaMask!");
            return;
        }

        let accounts = await window.ethereum.request({ method: 'eth_accounts' });

        if (accounts.length > 0) {
            alert("Wallet is already connected");
            return;
        }

        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        updateInfo();
        setInterval(updateInfo, 10000);
    } catch (error) {
        console.error("Error during account access: ", error);
    }
});

// Listen for the 'disconnect' event
window.ethereum.on('disconnect', () => {
    console.log('MetaMask is disconnected');
    // Reset the UI elements
    document.getElementById('connectButton').innerText = 'Connect Wallet';
    document.getElementById('walletIdDisplay').innerText = '';
    document.getElementById('balanceDisplay').innerText = '';
});