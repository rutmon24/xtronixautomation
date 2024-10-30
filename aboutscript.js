document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const accordionContent = this.nextElementSibling;
            const isOpen = accordionContent.style.display === "block";

            // Close all open accordion items
            document.querySelectorAll(".accordion-content").forEach(content => {
                content.style.display = "none";
            });

            // Open the clicked accordion item if it was closed
            if (!isOpen) {
                accordionContent.style.display = "block";
            }
        });
    });
});
