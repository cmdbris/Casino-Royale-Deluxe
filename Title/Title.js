let loadingScreen = document.querySelector('.Loading-Screen');

const Navigation = document.getElementById("Navigation");

loadingScreen.classList.add('Deactivate-Loading-Screen');


// Check if the clicked element is a button with the class "Navigation-Button"
// Extract the data-page attribute to get the page name
// Redirect to the corresponding HTML page

Navigation.addEventListener('click', (event) => {
    const targetButton = event.target;
    
    if (targetButton.classList.contains('Navigation-Button')) {

        loadingScreen.classList.remove('Activate-Loading-Screen', 'Deactivate-Loading-Screen');
        void loadingScreen.offsetWidth; // Trigger reflow to ensure the animation restarts smoothly
        loadingScreen.classList.add('Activate-Loading-Screen')

        const filePath = targetButton.getAttribute('data-page');
        setTimeout(() => {window.location.href = filePath;}, 3000);
        }
});