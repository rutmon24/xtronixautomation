document.addEventListener("DOMContentLoaded", function() {
    const projectItems = document.querySelectorAll(".project-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");

    projectItems.forEach(item => {
        item.addEventListener("click", function() {
            const imgSrc = this.querySelector("img").src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
