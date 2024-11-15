document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('db.json')
      .then(response => response.json())
      .then(data => {
        const users = data.users;
        let userFound = false;
        let errorMessage = 'Invalid credentials. Please try again.';
        for (let user of users) {
          if (user.username === username && user.password === password) {
            userFound = true;
            errorMessage = 'Login successful!';
            break;
          }
        }
        const messageElement = document.getElementById('message');
        messageElement.textContent = errorMessage;
        messageElement.style.color = userFound ? 'green' : 'red';
      });
  });