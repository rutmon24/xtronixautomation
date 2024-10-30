document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".mySlides");
        slides.forEach((slide, index) => {
            slide.style.display = "none";
        });
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    const barsButton = document.getElementById("barsButton");
    const nav = document.querySelector("header nav ul");

    barsButton.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest("#barsButton") && !event.target.closest("nav")) {
            nav.classList.remove("active");
        }
    });

    document.querySelectorAll('.read-more, .view-more, .learn-more, .cta-button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target;
            if (target.classList.contains('read-more')) {
                window.location.href = 'services.html';
            } else if (target.classList.contains('view-more')) {
                window.location.href = 'projects.html';
            } else if (target.classList.contains('learn-more')) {
                window.location.href = 'about.html';
            } else if (target.classList.contains('cta-button')) {
                window.location.href = 'contact.html';
            }
        });
    });
});





/*
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".hero-images img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(showNextImage, 3000);
});
*/