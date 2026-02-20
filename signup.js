document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const bias = document.querySelector('input[name="bias"]:checked')?.value;
    const song = document.getElementById('fav-song').value;

    if (!bias) {
        alert("Please select your bias!");
        return;
    }

    // You can save this to localStorage to show on the Profile page later!
    localStorage.setItem('aespa_user', JSON.stringify({ name, bias, song }));

    alert(`Welcome to My-World, ${name}! Your profile has been SYNK'ed.`);
    window.location.href = 'profile.html'; // Redirect to profile
});