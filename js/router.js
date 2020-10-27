window.addEventListener('hashchange', (_event) => {
    checkURL();
});

function checkURL() {
    const hash = window.location.hash;
    const main = document.getElementById('main');
    const hashThanks = document.getElementById('thanks');
    if (hash === '#thanks') {
        main.classList.add('hidden');
        hashThanks.classList.remove('hidden');
    } else {
        main.classList.remove('hidden');
        hashThanks.classList.add('hidden');
    }
}

function navigateToHome() {
    window.location.hash = '';
}
