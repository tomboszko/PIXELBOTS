document.getElementById('connectButton').addEventListener('click', async () => {
    if (window.ethereum) {
        try {
            // Request account access
            await window.ethereum.enable();
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
});