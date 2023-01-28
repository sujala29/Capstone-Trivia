//Question bank
var questionBank= [
    {
        question : "What is the oldest soft drink in the United  States?",
        option : ['Coca-Cola','Dr.Pepper','Sprite','Pepsi'],
        answer : 'Dr.Pepper'
    },
    {
        question : "What is the highest grossing video game franchise till date?",
        option : ['Mario','Call Of Duty','Pokemon','Candycrush'],
        answer : 'Pokemon'
    },
    {
        question : 'Which countrys national animal is unicorn?',
        option : ['Scotland','Denmark','New Zealand','France'],
        answer : 'Scotland'
    },
    {
        question : 'What sport has been played on moon?',
        option : ['Frisbee','Soccer','Golf','Baseball'],
        answer : 'Golf'
    },

    {
        question :  "Which sea creature has 3 hearts?",
        option : ['Stingray','Octopus','Jellyfish','Shark'],
        answer : 'Octopus'
    },
    {
        question :   "On Friends, what is Ross's occupation?",
        option : ['Paleontologist','Meteorologist','News Anchor','Teacher'],
        answer : 'Paleontologist'
    },
    {
        question :  "In the United States where did Breaking Bad take place?",
        option : ['Utah','Missouri','Texas','New Mexico'],
        answer : 'New Mexico'
    },
    {
        question :  "what sport is reffered to as the sport of the kings?",
        option : ['Bocce Ball','Cricket','Rugby','Polo'],
        answer : 'Polo'
    },
    
    {
        question :  " What is the hardest natural substance in the world?",
        option : ['Iron','Diamond','Marble','Granite'],
        answer : 'Diamond'
    },
    

    {
        question : "What animal is the closest living relative of a human?",
        option : ['Gorillas','Monkeys','Bnobas','Homo Sapines'],
        answer : 'Bnobas'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,500);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

// click event to previous button
// previous.addEventListener('click,previousQuestion')

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();