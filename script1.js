// Array of questions
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "George Orwell", "Jane Austen"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    }
];

// Global variables
let currentQuestionIndex = 0;
let score = 0;

// Initialize the quiz
function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const feedbackContainer = document.getElementById("feedback-container");
    const nextButton = document.getElementById("next-button");

    // Clear feedback
    feedbackContainer.innerHTML = "";

    if (currentQuestionIndex >= quizQuestions.length) {
        questionContainer.innerHTML = `<h3>Quiz Over! Your score is: ${score}</h3>`;
        nextButton.style.display = "none";
        return;
    }

    // Get the current question
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h3>${currentQuestion.question}</h3>
        <div class="options">
            ${currentQuestion.options.map((option, index) => {
                return `<button class="option" onclick="checkAnswer('${option}')">${option}</button>`;
            }).join("")}
        </div>
    `;
    // Reset the fade-in animation
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.style.animation = 'none';
        option.offsetHeight; // Trigger reflow
        option.style.animation = 'fadeInOptions 0.5s forwards';
    });
}

// Check if the user's answer is correct
function checkAnswer(selectedAnswer) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const feedbackContainer = document.getElementById("feedback-container");

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        feedbackContainer.innerHTML = `<p style="color: green;">Correct!</p>`;
    } else {
        feedbackContainer.innerHTML = `<p style="color: red;">Incorrect. The correct answer is: ${currentQuestion.correctAnswer}</p>`;
    }

    // Disable options after answering
    const options = document.querySelectorAll(".option");
    options.forEach(button => button.disabled = true);
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Start the quiz
loadQuestion();
