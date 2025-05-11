var clients = document.getElementById('clients');
var services = document.getElementById('services');

// Toggle visibility and active state for clients
clients.addEventListener('click', function() {
  $(clients).toggleClass("active");
  $(".parent:not(#clients)").toggleClass("invisible");
}, false);

// Toggle visibility and active state for services
services.addEventListener('click', function() {
  $(services).toggleClass("active");
  $(".parent:not(#services)").toggleClass("invisible");
}, false);

// Ensure smooth transitions for the welcome and events sections
$(document).ready(function() {
  $(".welcome-section, .events-section").fadeIn(1000); // Smooth fade-in effect
});
// Add a welcome message dynamically
document.addEventListener('DOMContentLoaded', function() {
  var welcomeSection = document.querySelector('.welcome-section');
  if (welcomeSection) {
    welcomeSection.innerHTML = `
      <h1>Welcome to Our Website!</h1>
      <p>We are glad to have you here. Explore our services and stay updated with our latest events.</p>
    `;
  }

  // Add a placeholder for upcoming events
  var eventsSection = document.querySelector('.events-section');
  if (eventsSection) {
    eventsSection.innerHTML = `
      <h2>Upcoming Events</h2>
      <p>No events scheduled at the moment. Stay tuned for updates!</p>
    `;
  }
});