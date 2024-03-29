// Check for session cookie only on initial load of index.html
if (window.location.pathname === "/index.html") {
    var authenticated = document.cookie.split('; ').find(row => row.startsWith('authenticated='));
    if (authenticated) {
        // Redirect to welcome page if user is already authenticated
        window.location.href = "welcome.html";
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Here you would typically send the username and password to the server for authentication
    // For simplicity, let's just check if the username is "user" and password is "password"
    if (username === 'user' && password === 'password') {
        // Set session cookie
        document.cookie = "authenticated=true; path=/";
        // Redirect to new page
        window.location.href = "welcome.html";
    } else {
        document.getElementById('loginStatus').textContent = 'Invalid username or password. Please try again.';
    }
});
