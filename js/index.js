window.addEventListener('scroll', function() {
    const header = document.querySelector('header'); // Select the header element
    if (window.scrollY > 100  * window.innerHeight / 100) {
        header.classList.remove('hidden');
        header.style.top = '0' ;
    } else {
        header.classList.add('hidden');
        header.style.top = '-100px' ;
    }
});
