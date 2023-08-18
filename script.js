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
let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {// ">=" heisst = grösser oder gleich
    // Todo: show end screen
  } else {
    let question = questions[currentQuestion];
    document.getElementById("question-number").innerHTML = currentQuestion + 1; // für die zahl unten auf der seite
    document.getElementById("questiontext").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  // console.log("Selected answer is", selection); // herausfinden, welche variable drin ist
  let selectedQuestionNumber = selection.slice(-1);
  // console.log("selectedQuestionNumber is", selectedQuestionNumber);
  // console.log("Current question is", question["right_answer"]);

  let idOfRightAnswer = `answer_${question["right_answer"]}`; //sicherstellung, dass die answeres gewählt werden von jedem array

  if (selectedQuestionNumber == question["right_answer"]) {
    // console.log("Richtige antwort!");
    document.getElementById(selection).parentNode.classList.add("bg-success"); // parentNode gibt css klasse dem übergeordneten container
  } else {
    // console.log("Falsche Antwort!");
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false; // funktion für button anklickbar nach auswahl der antwort
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
