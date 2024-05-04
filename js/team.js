let currentIndex = 0;
const wrapper = document.getElementById('crousel');
const wrapperWidth = wrapper.offsetWidth; 
const itemWidth = wrapperWidth * 0.3 + 40; // Add 40px to the calculated item width

    function scrollToPrev() {
        currentIndex = (currentIndex - 1 + 8) % 4;
        const scrollAmount = currentIndex * itemWidth;
        wrapper.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        updateActiveDot(currentIndex);
    }

    function scrollToNext() {
        currentIndex = (currentIndex + 1) % 4; 
        const scrollAmount = currentIndex * itemWidth;
        wrapper.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        updateActiveDot(currentIndex);
    }


    function updateActiveDot(index) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.remove('dot-active');
            if (i === index) {
            dot.classList.add('dot-active');
            }
        });
    }