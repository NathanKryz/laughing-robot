const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Saves a listener to wait for the install prompt to arrive
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
});
// When they click the install button, prompt the user
// If they wish to install the app with a yes/no,
// On yes, execute the install, on no, go back to listening
butInstall.addEventListener('click', async () => {
    console.log("Attempting to install app");
    const promptEvent = window.deferredPrompt;

    if(!promptEvent){
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Terminates the deferred prompt after its been installed, sends a log for user verification
window.addEventListener('appinstalled', () => {
    window.deferredPrompt = null;
    console.log("app has been installed");
});
