document.addEventListener("DOMContentLoaded", function() {
    const readMoreLinks = document.querySelectorAll(".read-more");

    readMoreLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const postContent = this.parentElement;
            postContent.classList.toggle("expanded");
            if (postContent.classList.contains("expanded")) {
                this.textContent = "Read Less";
            } else {
                this.textContent = "Read More";
            }
        });
    });
});
