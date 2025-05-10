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