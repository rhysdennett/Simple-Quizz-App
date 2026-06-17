const questions = 
[
  {
    //Question 1
    question: "What year was the original DOOM released?", 
    answers: 
    [
      {text: "1989", correct: false},
      {text: "1993", correct: true},
      {text: "1999", correct: false},
      {text: "2004", correct: false},
    ]
  },

  {
    //Question 2
    question: "Who was the first secret character in the Mortal Kombat series?", 
    answers: 
    [
      {text: "Reptile", correct: true},
      {text: "Noob Saibot", correct: false},
      {text: "Ermac", correct: false},
      {text: "Smoke", correct: false},
    ]
  },

  {
    //Question 3
    question: "Mario's original name in the Donkey Kong arcade game was what?",
    answers:
    [
      {text: "Leapy", correct: false},
      {text: "Vincent", correct: false},
      {text: "Red", correct: false},
      {text: "Jumpman", correct: true},
    ]
  },

  {
    //Question 4
    question: "What is the best-selling video game of all time?",
    answers:
    [
     {text: "Minecraft", correct: true},
     {text: "Red Dead Redemption 2", correct: false},
     {text: "Grand Theft Auto V", correct: false},
     {text: "Wii Sports", correct: false},
    ]
  },

  {
    //Question 5
    question: "Which was the first video game to be played in space?",
    answers:
    [
      {text: "Pac-Man", correct: false},
      {text: "Space Invaders", correct: false},
      {text: "Tetris", correct: true},
      {text: "Donkey Kong", correct: false},
    ]
  },
  
  {
    //Question 6
    question: "What game was so badly recieved that it was a cause of the 1983 video game crash?",
    answers:
    [
      {text: "Raiders of the Lost Ark", correct: false},
      {text: "Centipede", correct: false},
      {text: "E.T. the Extra Terrestial", correct: true},
      {text: "Obelix", correct: false},
    ]

  },

  {
    //Question 7
    question: "Which food was Pac-Man designed to resemble?",
    answers:
    [
      {text: "A cheese wheel with a slice missing", correct: false},
      {text: "A pizza with a slice missing", correct: true},
      {text: "A pie with a slice missing", correct: false},
      {text: "A lemon with a bite taken out", correct: false},
    ]
  },

  {
    //Question 8
    question: "What was the first commerical video game ever created?",
    answers:
    [
      {text: "Pong", correct: false},
      {text: "Super Mario Bros.", correct: false},
      {text: "Magnavox Odyssey", correct: false},
      {text: "Computer Space", correct: true},
    ]
  },
]

//Elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//Score Function
let currentQuestionIndex = 0;
let score = 0;

//Starts Quiz
function startQuiz()
{
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion()
}

//Fetches Question Function and Index
function showQuestion()
{
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;

 //Operates Answer Function
  currentQuestion.answers.forEach(answer => 
  {
   const button = document.createElement("button");
   button.innerHTML = answer.text;
   button.classList.add("btn");
   answerButtons.appendChild(button);
   if(answer.correct)
   {
     button.dataset.correct = answer.correct;
   }
   button.addEventListener("click", selectAnswer);
  });
}

function resetState()
{
  nextButton.style.display = "none";
  while(answerButtons.firstChild)
  {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e)
{
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect)
  {
    selectedBtn.classList.add("correct");
    score++;
  }
  else
  {
    selectedBtn.classList.add("incorrect");
  }
  
  Array.from(answerButtons.children).forEach(button => 
  {
    if(button.dataset.correct === "true")
    {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  
  nextButton.style.display = "block";
}

function showScore()
{
  resetState()
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton()
{
  currentQuestionIndex++;

  if(currentQuestionIndex < questions.length)
  {
    showQuestion()
  }
  else
  {
    showScore()
  }
}

nextButton.addEventListener("click", ()=> 
{

  if(currentQuestionIndex < questions.length)
  {
    handleNextButton();
  }
  else
  {
    startQuiz();
  }
})

startQuiz();


