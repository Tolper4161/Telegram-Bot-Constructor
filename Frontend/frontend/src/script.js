const square = document.querySelector('.features-box');
square.classList.remove('features-box-anim');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            square.classList.add('features-box-anim');
            return;
        }
        square.classList.remove('features-box-anim');
    });
});
observer.observe(document.querySelector('.square-wrapper'));