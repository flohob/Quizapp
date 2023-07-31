
currentQuestion = 0;


function init() {
    document.getElementById('allquestions').innerHTML = questions.length;

    showquestion();
}

function showquestion (){
let question = questions[currentQuestion];
document.getElementById('questiontext').innerHTML = question['question'];
document.getElementById('answer_1').innerHTML = question['answer_1'];
document.getElementById('answer_2').innerHTML = question['answer_2'];
document.getElementById('answer_3').innerHTML = question['answer_3'];
document.getElementById('answer_4').innerHTML = question['answer_3'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    if (selectedQuestionNumber == question['right_answer']) {console.log ("Richige Antwort")}
     else { console.log("Falsche Antwort")};

}