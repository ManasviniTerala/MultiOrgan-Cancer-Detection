// Close the modal when clicking outside of it
window.onclick = function(event) {
    var signupModal = document.getElementById('signupModal');
    var loginModal = document.getElementById('loginModal');
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}