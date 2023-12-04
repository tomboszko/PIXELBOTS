
function addAlertListener(elementId) {
    document.getElementById(elementId).addEventListener('click', function() {
        alert('Sorry, this feature is not yet implemented. Work in progress...');
    });
}

addAlertListener('mintButton');
//addAlertListener('helpButton');