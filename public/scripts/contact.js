document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  if(form) {
    form.addEventListener('submit', (event) => {
      const Name = document.getElementById('Name').value.trim()
      const Surname = document.getElementById('Surname').value.trim()
      const Email = document.getElementById('Email').value.trim()
      const Message = document.getElementById('Message').value.trim

       if (!Name || !Surname || !Email|| !Message) {
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