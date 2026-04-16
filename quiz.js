// ===== Quiz Data =====
const quizData = [
    {
        question: "What is your zodiac sign?",
        options: [
            { text: "Pisces, Cancer, Libra", member: "Karina" },
            { text: "Taurus, Virgo, Capricorn", member: "Winter" },
            { text: "Gemini, Scorpio, Aquarius", member: "Giselle" },
            { text: "Aries, Leo, Sagittarius", member: "Ningning" }
        ]
    },
    {
        question: "What are your favorite colors?",
        options: [
            { text: "Blue, Green, Purple", member: "Karina" },
            { text: "White, Gray, Beige", member: "Winter" },
            { text: "Black, Navy, Brown", member: "Giselle" },
            { text: "Pink, Red, Yellow", member: "Ningning" }
        ]
    },
    {
        question: "Which season do you enjoy the most?",
        options: [
            { text: "Spring", member: "Karina" },
            { text: "Winter", member: "Winter" },
            { text: "Autumn", member: "Giselle" },
            { text: "Summer", member: "Ningning" }
        ]
    },
    {
        question: "Choose a symbol!",
        options: [
            { text: "Heart", member: "Karina" },
            { text: "Star", member: "Winter" },
            { text: "Moon", member: "Giselle" },
            { text: "Butterfly", member: "Ningning" }
        ]
    },
    {
        question: "If you had to describe yourself in one word, what would it be?",
        options: [
            { text: "Responsible", member: "Karina" },
            { text: "Chill", member: "Winter" },
            { text: "Confident", member: "Giselle" },
            { text: "Creative", member: "Ningning" }
        ]
    },
    {
        question: "Which animal is your favorite?",
        options: [
            { text: "Shark", member: "Karina" },
            { text: "Fox", member: "Winter" },
            { text: "Dog", member: "Giselle" },
            { text: "Cat", member: "Ningning" }
        ]
    },
    {
        question: "Which type of movies do you enjoy the most?",
        options: [
            { text: "Animation", member: "Karina" },
            { text: "Action", member: "Winter" },
            { text: "Comedy", member: "Giselle" },
            { text: "Horror", member: "Ningning" }
        ]
    },
    {
        question: "Which amusement park ride would you choose?",
        options: [
            { text: "Carousel", member: "Karina" },
            { text: "Roller coaster", member: "Winter" },
            { text: "Ferris wheel", member: "Giselle" },
            { text: "Horror House", member: "Ningning" }
        ]
    },
    {
        question: "What’s your go-to drink?",
        options: [
            { text: "Tea", member: "Karina" },
            { text: "Milk", member: "Winter" },
            { text: "Coffee", member: "Giselle" },
            { text: "Juice", member: "Ningning" }
        ]
    },
    {
        question: "Which music genre do you like listening to the most?",
        options: [
            { text: "K-pop", member: "Karina" },
            { text: "R&B", member: "Winter" },
            { text: "Musical theatre", member: "Giselle" },
            { text: "Hip-hop", member: "Ningning" }
        ]
    }
];

// ===== Member Images =====
const memberImages = {
    Karina: "public/assets/karina-3.jpg", 
    Winter: "public/assets/winter-3.jpg",
    Giselle: "public/assets/giselle-3.jpg",
    Ningning: "public/assets/ningning-3.jpg"
};

document.addEventListener("DOMContentLoaded", () => {
// ===== DOM ELEMENTS =====
const questionEl = document.getElementById("question");
const buttons = document.querySelectorAll(".buttons button");
const counterEl = document.getElementById("counter");
const quizCard = document.querySelector(".quiz-card");

// ===== STATE =====
let currentQuestion = 0;

const scores = {
    Karina: 0,
    Winter: 0,
    Giselle: 0,
    Ningning: 0
};

// ===== SHOW QUESTION =====
function showQuestion(index) {
    const q = quizData[index];
    questionEl.textContent = q.question;

    buttons.forEach((btn, i) => {
        btn.textContent = q.options[i].text;
        btn.disabled = false;
        btn.style.background = "#e4e4e4";
        btn.style.display = "inline-block";
    });

    counterEl.textContent = `Question ${index + 1} of ${quizData.length}`;
}

// ===== HANDLE ANSWERS =====
buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {

        const selectedMember = quizData[currentQuestion].options[i].member;
        scores[selectedMember]++;

        btn.style.background = "#cbf6f5";
        buttons.forEach(b => b.disabled = true);

        setTimeout(() => {
            currentQuestion++;

            if (currentQuestion < quizData.length) {
                showQuestion(currentQuestion);
            } else {
                showResult();
            }
        }, 400);
    });
});

// ===== SHOW RESULT =====
function showResult() {

    const maxScore = Math.max(...Object.values(scores));
    const winner = Object.keys(scores).find(k => scores[k] === maxScore);

    // ===== SAVE / UPDATE HISTORY =====
    let history = JSON.parse(localStorage.getItem("quizHistory")) || [];

    if (history.length > 0) {
        history[history.length - 1] = {
            member: winner,
            date: new Date().toLocaleString()
        };
    } else {
        history.push({
            member: winner,
            date: new Date().toLocaleString()
        });
    }

    localStorage.setItem("quizHistory", JSON.stringify(history));

    // ===== DISPLAY RESULT =====
    questionEl.textContent = `You are most like ${winner}!`;
    counterEl.textContent = "";
    buttons.forEach(btn => btn.style.display = "none");

    // ===== IMAGE =====
    const img = document.createElement("img");
    img.src = memberImages[winner];
    img.style.width = "200px";
    img.style.borderRadius = "15px";
    img.style.marginTop = "15px";
    quizCard.appendChild(img);

    // ===== VIEW RESULTS BUTTON =====
    const viewBtn = document.createElement("button");
    viewBtn.textContent = "View All Results";
    viewBtn.style.marginTop = "15px";
    viewBtn.onclick = () => {
        window.location.href = "results.html";
    };
    quizCard.appendChild(viewBtn);

    // ===== UPDATE BUTTON =====
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update Latest Result";
    updateBtn.style.marginTop = "10px";

    updateBtn.onclick = () => {

        let history = JSON.parse(localStorage.getItem("quizHistory")) || [];

        if (history.length > 0) {
            history[history.length - 1] = {
                member: winner,
                date: new Date().toLocaleString()
            };

            localStorage.setItem("quizHistory", JSON.stringify(history));
            alert("Latest result updated!");
        }
    };

    quizCard.appendChild(updateBtn);
}

// ===== INIT =====
showQuestion(currentQuestion);

});


