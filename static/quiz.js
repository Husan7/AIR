const quizData = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
    { question: "Which is the largest planet?", options: ["Earth", "Jupiter", "Mars", "Venus"], answer: "Jupiter" },
    { question: "What is 5 + 3?", options: ["5", "8", "12", "7"], answer: "8" }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
    document.getElementById("nextBtn").style.display = "none";
    document.querySelector(".progress").style.width = ((currentQuestion + 1) / quizData.length) * 100 + "%";
}

function checkAnswer(selected) {
    const q = quizData[currentQuestion];
    if (selected === q.answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
    }
}

loadQuestion();
