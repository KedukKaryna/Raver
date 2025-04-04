
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide, .slideActive');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('slideActive');
                slide.classList.remove('slide');
            } else {
                slide.classList.add('slide');
                slide.classList.remove('slideActive');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    

    let slideInterval = setInterval(nextSlide, 5000);
    

    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    

    const modal = document.getElementById('callbackModal');
    const openModalBtns = document.querySelectorAll('.call-button, .braver-footer__call-button');
    const closeModalBtn = document.querySelector('.close-modal');
    
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    

    const langBtns = document.querySelectorAll('.language-switch button, .braver-footer__lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.parentNode;
            parent.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    

    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Форма отправлена! Мы свяжемся с вами в ближайшее время.');
            this.reset();
            if (this.closest('.modal')) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    

    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            alert('Видео будет воспроизведено');
        });
    }
    

    const moreDetails = document.querySelectorAll('.moreDetails');
    moreDetails.forEach(item => {
        item.addEventListener('click', function() {
            alert('Подробная информация будет показана');
        });
    });
    

    const readAllReviews = document.querySelector('.sectionContainerReviews p');
    if (readAllReviews) {
        readAllReviews.addEventListener('click', function() {
            alert('Все отзывы будут показаны');
        });
    }
    

    const leaveReviewBtn = document.querySelector('.button1');
    if (leaveReviewBtn) {
        leaveReviewBtn.addEventListener('click', function() {
            alert('Форма для оставления отзыва будет открыта');
        });
    }
});