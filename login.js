function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Check if the username and password are correct
    if (username === 'Admin' && password === 'Admin@123') {
        // Redirect to the desired page or perform other actions
        //alert('Login successful! Redirecting...');
        // Redirect to another page after successful login
        window.location.href = 'https://roshanmahakalkar.github.io/WebtoLead/';

    } else {
        // Display an error message
        errorMessage.textContent = 'Please enter a correct username and password.';
    }
}