document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Here you would typically send the username and password to the server for authentication
    // For simplicity, let's just check if the username is "user" and password is "password"
    if (username === 'user' && password === 'password') {
        // Set session cookie
        document.cookie = "authenticated=true; path=/";
        document.getElementById('loginStatus').textContent = 'Login successful!';
    } else {
        document.getElementById('loginStatus').textContent = 'Invalid username or password. Please try again.';
    }
});

// Check for session cookie on page load
window.addEventListener('load', function() {
    var authenticated = document.cookie.split('; ').find(row => row.startsWith('authenticated='));
    if (authenticated) {
        //redirect to welcome page
        window.location.href = "welcome.md";
    }
});
