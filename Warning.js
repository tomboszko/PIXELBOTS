
function addAlertListener(elementId) {
    document.getElementById(elementId).addEventListener('click', function() {
        alert('Sorry, the focus of this project is to learn about connecting a wallet to a website.  The functionality of this website is limited.  Please visit the "Help" page for more information.');
    });
}

addAlertListener('mintButton');
//addAlertListener('helpButton');