document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Validation
        if (name && email && subject && message) {
            alert("Thank you for contacting us, " + name + "!");
            contactForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});

function initMap() {
    const location = { lat: -34.397, lng: 150.644 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
