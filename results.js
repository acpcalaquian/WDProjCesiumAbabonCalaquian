// Member Images
const memberImages = {
    Karina: "public/assets/karina-3.jpg",
    Winter: "public/assets/winter-3.jpg",
    Giselle: "public/assets/giselle-3.jpg",
    Ningning: "public/assets/ningning-3.jpg"
};

// Get history
let history = JSON.parse(localStorage.getItem("quizHistory")) || [];

const latestText = document.getElementById("latest-result");
const imgEl = document.getElementById("result-img");
const historyList = document.getElementById("history-list");

if (history.length > 0) {
    const latest = history[history.length - 1];

    // Show latest result
    latestText.textContent = `You are most like ${latest.member}!`;
    imgEl.src = memberImages[latest.member];

    // Show past results
    history.slice().reverse().forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.member} — ${item.date}`;
        historyList.appendChild(li);
    });
} else {
    latestText.textContent = "No quiz results yet.";
    imgEl.style.display = "none";
}

// Retake button
function retakeQuiz() {
    window.location.href = "quiz.html";
}