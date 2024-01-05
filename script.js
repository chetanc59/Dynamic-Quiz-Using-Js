// step 1
let quizData = [
    {
        'question': " What does HTML stand for?",
        'options': ["Hypertext Machine language.", "Hypertext and links markup language", "Hypertext Markup Language", "Hightext machine language."],
        'correct': 2,
    },
    {
        'question': " How is document type initialized in HTML5.?",
        'options': ["</DOCTYPE HTML>", "</DOCTYPE>", "<!DOCTYPE HTML>", "</DOCTYPE html>"],
        'correct': 2,
    },
    {
        'question': " Which of following HTML Elements is used for making any text bold ?",
        'options': ["<p>", "<i>", "<li>", "<b>"],
        'correct': 3,
    },
    {
        'question': " Which of the following HTML element is used for creating an unordered list?",
        'options': ["<ui>", "<i>", "<em>", "<ul>"],
        'correct': 3,
    },
    {
        'question': " Which of the following characters indicate closing of a tag? ",
        'options': [".", "/", "//", "!"],
        'correct': 1,
    }
]

// step 2 
// let quiz = document.querySelector("#complete");
let answerEl = document.querySelectorAll(".answer");
let questionElem = document.getElementById('question');
let [option_1, option_2, option_3, option_4] = document.querySelectorAll('.option_1, .option_2, .option_3, .option_4')
const submit = document.getElementById('submit');
let score = 0;
let currentQuiz = 0;
let index = 0;
// step 3
// let index = 0;
const loadQuiz = (() => {
    const { question, options } = quizData[currentQuiz];
    questionElem.innerText = [++index]+ ':' + question;

    options.forEach((curOption, index) => {

        option_1.innerText = options[0];
        option_2.innerText = options[1];
        option_3.innerText = options[2];
        option_4.innerText = options[3];

    });

}
)
loadQuiz();

// deselected function
const deselectedoption = () => {
    answerEl.forEach((curelem) => curelem.checked = false);
}
const getselectedIndex = () => {
    let answerElement = Array.from(answerEl);
    return answerElement.findIndex((curelem) => curelem.checked)
}



submit.addEventListener('click', () => {
    var selectedoptionIndex = getselectedIndex();
    // console.log(selectedoptionIndex);

    if (selectedoptionIndex === quizData[currentQuiz].correct) {
        score = score + 1;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {

        deselectedoption();
        loadQuiz();
    }
    else {

        // Find the element where you want to display the result (assuming "quiz" is the container)
        let quiz = document.getElementById("complete");
   quiz.innerHTML = "";

        // Create a heading element
        var heading = document.createElement("h2");
        heading.innerText = ` 🏆 Your score is: ${score} / ${quizData.length}`; // Display the score
        heading.classList.add("d-flex","justify-content-center","align-items-center");

        // Create a paragraph element
        var paragraph = document.createElement("h2");
        paragraph.innerText = `🎊 Congratulations for completing this Quiz 🎊`;
        paragraph.classList.add("d-flex","justify-content-center","align-items-center");

        var reloadbtn = document.createElement("button");
        reloadbtn.textContent = `Play again`;
        reloadbtn.classList.add("btn", "btn-lg", "alagse");
        // reloadbtn.id.add("submit");
        reloadbtn.addEventListener('click',()=>
        {
            location.reload();
        })
        var border = document.createElement("hr");

        // Append the paragraph to the resultDiv
        quiz.appendChild(heading);
        quiz.appendChild(border);

        // Append the paragraph to the resultDiv
        quiz.appendChild(paragraph);
        quiz.appendChild(reloadbtn);

    }
});

