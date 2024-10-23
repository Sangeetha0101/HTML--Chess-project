// Login form validation and redirection
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple login validation (you can enhance this with a real authentication system)
    if (email === '' || password === '') {
        alert('Please enter both email and password.');
    } else if (email === 'user@example.com' && password === 'password123') {  // Example credentials
        alert('Login successful! Redirecting to home page...');
        
        // Redirect to the home page (replace 'home.html' with your home page)
        setTimeout(function() {
            window.location.href = 'home.html';  // Redirect to home page after 1 second
        }, 1000);
    } else {
        alert('Invalid email or password.');
    }
});
