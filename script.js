let currentQuestion = 0;
let answerSelected = false;
let rightquestions = 0;

function init() {
    document.getElementById('allquestions').innerHTML = questions.length;
    showquestion();
}

function showquestion() {

if(currentQuestion >= questions.length) {
    document.getElementById('endscreen').style = '';
    document.getElementById('cardbody').style = 'display:none';
    document.getElementById('endscreen-qu').innerHTML = questions.length;
    document.getElementById('endscreen-qu1').innerHTML = rightquestions;

} else {

    let percentage = Math.round((currentQuestion / questions.length)*100);
    document.getElementById('progress-bar').innerHTML = `${percentage}%`;
    document.getElementById('progress-bar').style.width = `${percentage}%`;
    console.log(percentage);
    let question = questions[currentQuestion];
    document.getElementById('numberallquestions').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}
}

function answer(selection) {
    if (!answerSelected) { 
        answerSelected = true;
        let question = questions[currentQuestion];
        let selectedQuestionNumber = selection.slice(-1);
        let idofrightAnswer = `answer_${question['right_answer']}`;

        if (selectedQuestionNumber == question['right_answer']) {
            rightquestions++;
            document.getElementById(selection).parentNode.classList.add('bg-success');
        } else {
            document.getElementById(selection).parentNode.classList.add('bg-danger');
            document.getElementById(idofrightAnswer).parentNode.classList.add('bg-success');
        }
    }
    document.getElementById('enable-btn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    answerSelected = false;
    document.getElementById('enable-btn').disabled = true;
    showquestion();
    resetAnswerButtons();
}

function resetAnswerButtons() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger', 'bg-success');
    }
}

function restartgame() {
    location.reload();
}