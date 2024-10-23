// Sign-up form validation
document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to server

    const name = document.getElementById('name').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple form validation
    if (name === '' || mobileNumber === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill out all fields.');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else {
        // Display success message
        alert('Account successfully created!');
        
        // Check if the page is being redirected after 1 second
        setTimeout(function() {
            window.location.assign('LOGIN.html');  // Redirect to login page
        }, 1000);
    }
});
