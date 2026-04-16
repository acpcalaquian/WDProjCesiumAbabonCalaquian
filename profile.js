

// ===== LOAD PROFILE =====
window.onload = function () {

    const savedData = localStorage.getItem("aespa_user");

    if (!savedData) return;

    const userData = JSON.parse(savedData);

    // ===== DISPLAY INFO =====
    document.getElementById("welcome-name").textContent = `Welcome, ${userData.name}!`;
    document.getElementById("display-bias").textContent = userData.bias;
    document.getElementById("display-song").textContent = userData.song;

    // ===== PREFILL FORM =====
    document.getElementById("edit-name").value = userData.name;
    document.getElementById("edit-bias").value = userData.bias;
    document.getElementById("edit-song").value = userData.song;

    // ===== STYLING =====
    const detailBoxes = document.querySelectorAll(".detail-box");
    const biasBox = document.getElementById("display-bias").parentElement;

    const biasImages = {
        karina: "public/assets/karina-bg.jpg",
        winter: "public/assets/winter-bg.png",
        giselle: "public/assets/giselle-bg.png",
        ningning: "public/assets/ningning-bg.png"
    };

    const biasColors = {
        karina: "#47bce3",
        winter: "#73e273",
        giselle: "#c13d3d",
        ningning: "#bd7f15"
    };

    const biasKey = userData.bias.toLowerCase();

    if (biasImages[biasKey]) {
        biasBox.style.backgroundImage =
            `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('${biasImages[biasKey]}')`;
    }

    if (biasColors[biasKey]) {
        detailBoxes.forEach(box => {
            box.style.borderColor = biasColors[biasKey];
            box.style.boxShadow = `5px 5px 0px ${biasColors[biasKey]}`;

            const label = box.querySelector("h3");
            if (label) label.style.color = biasColors[biasKey];
        });
    }
};

// ===== SAVE EDIT PROFILE =====
document.getElementById("save-profile-btn").onclick = () => {

    const savedData = JSON.parse(localStorage.getItem("aespa_user"));

    if (!savedData) {
        alert("No profile data found!");
        return;
    }

    const updatedData = {
        name: document.getElementById("edit-name").value || savedData.name,
        bias: document.getElementById("edit-bias").value || savedData.bias,
        song: document.getElementById("edit-song").value || savedData.song
    };

    localStorage.setItem("aespa_user", JSON.stringify(updatedData));

    alert("Profile updated successfully!");
    location.reload();
};

function goToEdit() {
    window.location.href = "editprofile.html";
}