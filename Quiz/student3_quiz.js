/*const declarations read only values. they cannot re assign later*/
/*const for multiple choices of the questions */
const option1Answer = document.querySelector(".option1");
const option2Answer = document.querySelector(".option2");
const option3Answer = document.querySelector(".option3");
const option4Answer = document.querySelector(".option4");
const answers = document.querySelector(".answers").children;
/*const of the question */
const question = document.querySelector(".question");

/*const of question number */
const questionNumberValue = document.querySelector(".value-of-the-question-number");
const correctAnswerSpanHigh = document.querySelector(".correct-answers-high");
const correctAnswerSpanLaw = document.querySelector(".correct-answers-law");
const remainingTime = document.querySelector(".remaining-time");
/*consts for total time taken calculations */
const timeTakenLaw = document.querySelector(".total-time-taken-law");
const timeTakenHigh = document.querySelector(".total-time-taken-high");
/*consts of marks */
const correctCountHigh = document.querySelector(".correct-count-high");
const incorrectCountHigh = document.querySelector(".incorrect-count-high");
const correctCountLaw = document.querySelector(".correct-count-law");
const incorrectCountLaw = document.querySelector(".incorrect-count-law");

/*button click audio */
var buttonSound = new Audio("student3_quiz_audio/click.wav");
/*quiz startup and end tone */
var toneSound = new Audio("student3_quiz_audio/tone.wav");

let questionId;
let questionIndex = 0;
let arrayForQuiz = [];
let quizArray = [];
let score = 0;
let interval;
let correctAnswerCount = 0;

/*function of total time taken calculation */
/*start time */
function startTimeTakenTimer() {
    startTimerForTimeTaken = new Date();
};
/*end time */
function endTimeTakenTimer() {
    endTimerForTimeTaken = new Date();
    //this will come in milliseconds
    var timeDifferentOfTimeTaken = endTimerForTimeTaken - startTimerForTimeTaken;
    // divided by 1000 to convert to seconds
    timeDifferentOfTimeTaken /= 1000;

    var seconds = Math.round(timeDifferentOfTimeTaken);
    timeTakenLaw.innerHTML = Math.floor(seconds) + " Seconds.";
    timeTakenHigh.innerHTML = Math.floor(seconds) + " Seconds.";
}

/*questions , multiple choice answers and their correct answer's index */
const questions = [{
    q: "What is the scientific name of Arjun?",
    answers: ["Syzygium cumini", "Terminalia arjuna", "Mangifera indica", "Citrus limon"],
    answer: 1
},
{
    q: "What is the English name of Jatropha curcas?",
    answers: ["Mango", "Lime", "Jatropha", "Arjun"],
    answer: 2
},



{
    q: "Select one medicinal use of Lemon",
    answers: ["Use as a treatment for Anaemia", "Use as a treatment for heart attack", "Use as a treatment for burns", "Use as a treatment for poisonings"],
    answer: 0
},


{
    q: "Select the family name of Jamun",
    answers: ["Myrtaceae", "Anacardiaceae", "Rutaceae", "Combretaceae"],
    answer: 0
},



{
    q: "What is the scientific name of Lemon?",
    answers: ["Mangifera indica", "Syzygium cumini", "Citrus limon", "Terminalia arjuna"],
    answer: 2
},


{
    q: "What is known as 'Centella asiatica' in scientific name?",
    answers: ["Jamun", "Arjun", "Jatropha", "Pennywort"],
    answer: 3
},




{
    q: "Select the current status of ‌Guava",
    answers: ["Naturalized Exotic", "Only Under Cultivation", "Native", "None"],
    answer: 2
},



{
    q: "Select the feature of Arjun tree from given answers",
    answers: ["Very large tree", "Very small tree", "Non flowering tree", "Not exist in Asia"],
    answer: 0
},



{
    q: "Select the scientific name for Neem tree",
    answers: ["Jatropha curcas", "Azadirachta indica", "Citrus limon", "Terminalia arjuna"],
    answer: 1
},



{
    q: "What is the family name of Neem tree?",
    answers: ["Myrtaceae", "Rutaceae", "Apiaceae", "Combretaceae"],
    answer: 1
},
]


/*function for clicking sound */
function soundOfButton() {
    buttonSound.play();

}

/**\function of quiz end / start  */
function toneOfButton() {
    toneSound.play();

}

/*function for load answers of the questions */
function loadingQuestionsAnswers() {
    questionNumberValue.innerHTML = questionIndex + 1;
    question.innerHTML = questions[questionId].q;
    option1Answer.innerHTML = questions[questionId].answers[0];
    option2Answer.innerHTML = questions[questionId].answers[1];
    option3Answer.innerHTML = questions[questionId].answers[2];
    option4Answer.innerHTML = questions[questionId].answers[3];
    questionIndex++;
}

/*function which enable to select answers */
function enableMultipleAnswers() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove("disabled", "correct", "wrong");
    }


}

/*function which disable selecting answers */
function disableMultipleAnswers() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.add("disabled");
        if (answers[i].id == questions[questionId].answer) {
            answers[i].classList.add("correct");
        }
    }
}

/*function of validating and updating score and count of answers */
function check(item) {
    if (item.id == questions[questionId].answer) {
        item.classList.add("correct");

        score = score + 2;
        correctAnswerCount++;

    } else {
        item.classList.add("wrong");
        score = score - 1;
    }

    /*functions called here */
    disableMultipleAnswers()
    stopCountdown();
}

/*function for starting countdown */
function startCountdown() {
    let timeLimit = 20;
    remainingTime.innerHTML = timeLimit;
    remainingTime.classList.remove("last-time-red-color")
    interval = setInterval(() => {
        timeLimit--;
        if (timeLimit < 10) {
            timeLimit = "0" + timeLimit;

        }
        if (timeLimit < 6) {
            remainingTime.classList.add("last-time-red-color");

        }
        remainingTime.innerHTML = timeLimit;
        if (timeLimit == 0) {

            /*functions called in here */
            clearInterval(interval);
            timeOver();

            score = score - 1;

        }

    }, 1000)
}

/*function for stop the countdown */
function stopCountdown() {
    clearInterval(interval);

}

/*functions for ending of the quiz with high marks (over 10) */
function quizOver() {
    document.querySelector(".quiz-end-interface-high-marks").classList.add("show");
    correctAnswerSpanHigh.innerHTML = score;

    correctCountHigh.innerHTML = correctAnswerCount;
    incorrectCountHigh.innerHTML = 10 - correctAnswerCount;

    /*function called here*/
    toneOfButton();
}

/*functions for ending of the quiz with law marks (below 10) */
function quizOver2() {

    document.querySelector(".quiz-end-interface-law-marks").classList.add("show");
    correctAnswerSpanLaw.innerHTML = score;

    correctCountLaw.innerHTML = correctAnswerCount;
    incorrectCountLaw.innerHTML = 10 - correctAnswerCount;

    /*function called here*/
    toneOfButton();
}

/*implemented a function for take random questions without repetition */
function selectRandomQuestion() {
    let getRandomNumber = Math.floor(Math.random() * questions.length);
    let checkDuplicate = 0;
    if (questionIndex == questions.length) {
        if (score >= 10) {
            /*function called here*/
            endTimeTakenTimer();
            quizOver();
        } else {
            /*function called here*/
            endTimeTakenTimer();
            quizOver2();
        }
    } else {
        if (arrayForQuiz.length > 0) {
            for (let i = 0; i < arrayForQuiz.length; i++) {
                if (arrayForQuiz[i] == getRandomNumber) {
                    checkDuplicate = 1;
                    break;
                }
            }
            if (checkDuplicate == 1) {
                /*function called here*/
                selectRandomQuestion();
            } else {
                questionId = getRandomNumber;
                /*function called here*/
                loadingQuestionsAnswers();
                quizArray.push(questionId);
            }
        }
        if (arrayForQuiz.length == 0) {
            questionId = getRandomNumber;
            /*function called here*/
            loadingQuestionsAnswers();
            quizArray.push(questionId);
        }

        arrayForQuiz.push(getRandomNumber);

    }
}


/*function for move to next question */
function next() {
    if (!answers[0].classList.contains("disabled")) {
        const button = document.querySelector('next-button')

    } else {
        /*functions are called in here */
        enableMultipleAnswers();
        selectRandomQuestion();
        startCountdown();


    }
}

/*function for skip to next question */
function skip() {
    if (!answers[0].classList.contains("disabled")) {

        score = score - 1
        /*functions are called in here */
        stopCountdown()
        startCountdown()
        enableMultipleAnswers()
        selectRandomQuestion()
    } else {
        const button = document.querySelector('skip-button')


    }


}

/*functions are called in here */
function timeOver() {

    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.add("disabled");
        if (answers[i].id == questions[questionId].answer) {
            answers[i].classList.add("correct");
        }
    }
    disableMultipleAnswers()
}


/*function for the try again button */
function tryAgain() {
    window.location.reload();
}

/*functions load when starting  */
window.onload = function () {
    /*functions called in here */
    selectRandomQuestion();
    startCountdown();
    startTimeTakenTimer();
}

/*function for exit button */
function exit() {
    window.location.replace("student3_quiz_home.html");
}