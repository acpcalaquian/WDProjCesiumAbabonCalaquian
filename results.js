
// ===== Member Images =====
const memberImages = {
    Karina: "public/assets/karina-3.jpg",
    Winter: "public/assets/winter-3.jpg",
    Giselle: "public/assets/giselle-3.jpg",
    Ningning: "public/assets/ningning-3.jpg"
};

// ===== LOAD RESULTS =====
function loadResults() {
    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];

    const latestResultEl = document.getElementById("latest-result");
    const resultImg = document.getElementById("result-img");
    const historyList = document.getElementById("history-list");

    if (history.length === 0) {
        latestResultEl.textContent = "No results yet.";
        return;
    }

    const latest = history[history.length - 1];

    latestResultEl.textContent = `Latest: You are most like ${latest.member}!`;
    resultImg.src = memberImages[latest.member];

    historyList.innerHTML = "";

    history.slice().reverse().forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.member} — ${item.date}`;
        historyList.appendChild(li);
    });
}

// ===== UPDATE BUTTON =====
document.getElementById("update-latest-btn").onclick = () => {
    let history = JSON.parse(localStorage.getItem("quizHistory")) || [];

    if (history.length > 0) {
        const latest = history[history.length - 1];

        history[history.length - 1] = {
            member: latest.member,
            date: new Date().toLocaleString()
        };

        localStorage.setItem("quizHistory", JSON.stringify(history));

        alert("Latest result updated!");
        loadResults();
    }
};

// ===== INIT =====
loadResults();
