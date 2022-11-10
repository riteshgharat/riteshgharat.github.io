//Registering ServiceWorker
if ('serviceWorker' in navigator) {
  // Register the service worker
  navigator.serviceWorker.register('./sw.js').then(reg => {
    console.log('👍 Successfully registered service worker');
    reg.addEventListener('updatefound', () => {
      // An updated service worker has appeared in reg.installing!
      newWorker = reg.installing;
      newWorker.addEventListener('statechange', () => {
        // Has service worker state changed?
        switch (newWorker.state) {
          case 'installed':
            // There is a new service worker available, show the notification
            if (navigator.serviceWorker.controller) {
              //let notification = document.getElementById('notification ');
              //notification.className = 'show';
              const update = alert('New update available!');
              window.location.reload();
              break;
            }
        }
      });
    });
  })
};
/*
// This variable will save the event for later use.
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevents the default mini-infobar or install dialog from appearing on mobile
  e.preventDefault();
  // Save the event because you'll need to trigger it later.
  deferredPrompt = e;
  // Show your customized install prompt for your PWA
  // Your own UI doesn't have to be a single element, you
  // can have buttons in different locations, or wait to prompt
  // as part of a critical journey.
  showInAppInstallPromotion();
});
const btnAdd = document.querySelector('#install-btn');

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  // add to home screen
  btnAdd.style.display = "block";
});
btnAdd.addEventListener('click', () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((result) => {
    if (result.outcome === 'accepted') {
      console.log('user Accepted');
    }
    deferredPrompt = null;
  });
});

window.addEventListener('appinstalled', (evt) => {
  app.logEvent('a2hs', 'installed');
})
*/

const butInstall = document.querySelector('#install-btn');
window.addEventListener('beforeinstallprompt', (event) => {
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;

  // Remove the 'hidden' class from the install button container
  //divInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', () => {
  console.log('👍', 'butInstall-clicked');

  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  const result = promptEvent.userChoice;
  console.log('👍', 'userChoice', result);
  // Reset the deferred prompt variable, since
  // prompt() can only be called once.
  window.deferredPrompt = null;
  // Hide the install button.
  //divInstall.classList.toggle('hidden', true);
  //}
});

window.addEventListener('appinstalled', (event) => {
  //console.log('👍', 'appinstalled', event);
  // Clear the deferredPrompt so it can be garbage collected
  window.deferredPrompt = null;

  butInstall.style.display = 'none';
});
