window.onload = function () {

    const user = JSON.parse(localStorage.getItem("aespa_user"));

    if (!user) return;

    document.getElementById("edit-name").value = user.name;

    // set bias radio
    const biasRadio = document.querySelector(`input[name="bias"][value="${user.bias.toLowerCase()}"]`);
    if (biasRadio) biasRadio.checked = true;

    document.getElementById("edit-song").value = user.song;
};

// SAVE UPDATED PROFILE
document.getElementById("save-btn").onclick = function () {

    const selectedBias = document.querySelector('input[name="bias"]:checked');

    const updatedUser = {
        name: document.getElementById("edit-name").value,
        bias: selectedBias ? selectedBias.value : "",
        song: document.getElementById("edit-song").value
    };

    localStorage.setItem("aespa_user", JSON.stringify(updatedUser));

    alert("Profile updated!");

    window.location.href = "profile.html";
};