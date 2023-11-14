// Function to copy wallet ID to clipboard on click
window.copyToClipboard = function() {
    let walletIdElement = document.getElementById('walletIdDisplay');
    let walletId = walletIdElement.title;
    console.log('walletId:', walletId);
    console.log('navigator.clipboard:', navigator.clipboard);
    navigator.clipboard.writeText(walletId).then(function() {
        walletIdElement.title = 'Copied!';
        console.log('Copying to clipboard was successful!');
        setTimeout(function() {
            walletIdElement.title = walletId;
        }, 2000); // Reset the tooltip after 2 seconds
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
