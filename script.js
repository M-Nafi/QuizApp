let questions = [
  {
    question: "Was ist der Affengriff für Windows-Nutzer?",
    answer_1: "Alt + Shift + Ctrl",
    answer_2: "Strg + Alt + Entf",
    answer_3: "Alt + Cmd + Entf",
    answer_4: "Shift + Alt + Ctrl",
    right_answer: 2,
  },
  {
    question: "Wer gilt als erste/r Programmierer/in?",
    answer_1: "Alan Turing",
    answer_2: "Steve Jobs",
    answer_3: "Steve Madison",
    answer_4: "Ada Lovelace",
    right_answer: 4,
  },
  {
    question: "Was für elektromagnetische Wellen verwendet Wi-Fi?",
    answer_1: "Gar keine",
    answer_2: "Gammastrahlen",
    answer_3: "Mikrowellen",
    answer_4: "Radiowellen",
    right_answer: 4,
  },
  {
    question: "Wofür steht FTP?",
    answer_1: "Freie Technische Partei",
    answer_2: "File Tripling Power",
    answer_3: "File Transfer Protocol",
    answer_4: "Fast Total Processing",
    right_answer: 3,
  },
  {
    question: "Welches Gerät konvertiert digitale zu analogen Signalen?",
    answer_1: "Modem",
    answer_2: "Tastatur",
    answer_3: "CPU",
    answer_4: "Monitor",
    right_answer: 1,
  },
];


let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio("audio/success.mp3");
let AUDIO_FAIL = new Audio("audio/damn.mp3");


function init() {
  document.getElementById("all-questions").innerHTML = questions.length;    
  document.getElementById("next-button").disabled = true; // Deaktiviere den "Nächste Frage"-Button
  showQuestion();
}


function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {    
    updateToNextQuestion();
  }
}


function gameIsOver() {
  return currentQuestion >= questions.length;  
}


function showEndScreen() {
  document.getElementById("endScreen").style = "";
  document.getElementById("questionBody").style = "display: none";
  document.getElementById("amount-Of-Questions").innerHTML = questions.length;
  document.getElementById("amount-of-right-questions").innerHTML =
    rightQuestions;
  document.getElementById("header-image").src = "./img/trophy.png";
}


function updateProgressBar() {
  let percent = (currentQuestion +1) / questions.length * 100;
  percent = Math.round(percent);
  document.getElementById("progress-bar").innerHTML = `${percent} %`;
  document.getElementById("progress-bar").style = `width: ${percent}%;`;
}


function updateToNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("question-number").innerHTML = currentQuestion + 1; // zahl unten auf der seite
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}


function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`; //sicherstellung, dass die answeres gewählt werden von jedem array

  if (rightAnswerSelected(selectedQuestionNumber, question)) {   // Richtige Frage beantwortet
    document.getElementById(selection).parentNode.classList.add("bg-success"); // parentNode gibt css klasse dem übergeordneten container
    AUDIO_SUCCESS.play();
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    AUDIO_FAIL.play();
  }
  document.getElementById("next-button").disabled = false; // funktion für button anklickbar nach auswahl der antwort
  updateProgressBar();  // anzeige der prozentanzahl NACH klicken auf nächste frage
}


function rightAnswerSelected(selectedQuestionNumber, question) {
  return selectedQuestionNumber == question['right_answer'];
}


function nextQuestion() {
  currentQuestion++; // zb von 0 auf 1
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}


function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");

  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");

  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");

  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}


function restartGame() {
  document.getElementById("header-image").src = "./img/pencil.jpg";
  document.getElementById("questionBody").style = ""; //questionbody wieder anzeigen
  document.getElementById("endScreen").style = "display: none"; // endscreen ausblenden
  rightQuestions = 0;
  currentQuestion = 0;
  init();
}
