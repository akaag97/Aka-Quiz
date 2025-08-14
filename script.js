let currentLevel = 0;
let currentQuestionIndex = 0;
let score = 0;

function showLevels() {
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("levels").style.display = "block";
    document.body.className = "";

    const levelButtons = document.getElementById("level-buttons");
    if (levelButtons.innerHTML.trim() === "") {
        for (let i = 1; i <= 20; i++) {
            const btn = document.createElement("button");
            btn.innerText = `Level ${i}`;
            btn.onclick = () => startLevel(i);
            levelButtons.appendChild(btn);
        }
    }
}

function startLevel(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;

    document.body.className = `level-${level}`;
    document.getElementById("levels").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("level-heading").innerText = `Level ${level}`;
    showQuestion();
}

function showQuestion() {
    const questionObj = levels[currentLevel][currentQuestionIndex];
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");

    questionEl.innerText = questionObj.question;
    optionsEl.innerHTML = "";
    document.getElementById("next-btn").style.display = "none";

    questionObj.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option, btn);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected, btnElement) {
    const correctAnswer = levels[currentLevel][currentQuestionIndex].answer;
    const optionsButtons = document.querySelectorAll("#options button");

    // Disable all options after answering
    optionsButtons.forEach(btn => btn.disabled = true);

    if (selected === correctAnswer) {
        btnElement.classList.add("correct");
        score++;
    } else {
        btnElement.classList.add("wrong");

        // Highlight correct answer
        optionsButtons.forEach(btn => {
            if (btn.innerText === correctAnswer) {
                btn.classList.add("correct");
            }
        });
    }

    // Show Next Question button
    document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < levels[currentLevel].length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerText =
        `You scored ${score} out of ${levels[currentLevel].length}`;
}

function backToLevels() {
    document.getElementById("result").style.display = "none";
    document.getElementById("levels").style.display = "block";
    document.body.className = "";
}

function backToHome() {
    document.getElementById("levels").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.body.className = "";
}
