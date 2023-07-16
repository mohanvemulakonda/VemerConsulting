// script.js

// Google Maps API integration
function initMap() {
    // Replace latitude and longitude values with your actual location
    var location = { lat: 40.712776, lng: -74.005974 };

    // Create a map centered on the provided location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });

    // Add a marker for the location
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Label Manufacturing'
    });
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Perform validation and submit the form data
        if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
            // TODO: Submit the form data to the server or perform desired action
            console.log('Form submitted successfully!');
            form.reset();
        } else {
            console.log('Please fill in all the fields.');
        }
    });
});
