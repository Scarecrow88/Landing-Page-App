document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector ('.slidertrack');
    const slides = document.querySelectorAll ('.slide');
    const prevBtn = document.querySelector ('.sliderbutton.prev');
    const nextBtn = document.querySelector ('.sliderbutton.next');
    const dots = document.querySelectorAll ('.dot');
    let index = 0;
    function updateSlider () {
        track.style.transform = `translateX(-${index * 100}%)`;
        // Actualizar indicadores
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
    
    prevBtn.addEventListener ('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider ();
    });
    
    nextBtn.addEventListener ('click', () => {
        index = (index + 1) % slides.length;
        updateSlider ();
    });
    
    // Click en los puntos
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            updateSlider();
        });
    });
    
    // Auto-slide (opcional)
    setInterval (() => {
        index = (index + 1) % slides.length;
        updateSlider ();
    }, 5000); // cada 5 segundos
});