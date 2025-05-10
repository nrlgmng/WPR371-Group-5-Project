document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  if(form) {
    form.addEventListener('submit', (event) => {
      const name = document.getElementById('Name').value.trim()
      const surname = document.getElementById('Surname').value.trim()
      const email = document.getElementById('Email').value.trim()
      const message = document.getElementById('Message').value.trim

       if (!name || !surname || !email|| !message) {
        event.preventDefault();
        alert('Please fill out all fields');
      } 
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        event.preventDefault();
        alert('Please enter a valid email address');
      }
    })
  }
})