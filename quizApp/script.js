const questions = [
    {
        question: "What is the capital of France?",
        answer:[
            { text: "Paris", correct:true},
            { text: "Baku", correct:false},
           { text: "New York", correct:false},
           { text: "Kaunas", correct:false}
        ]
    },
    {
        question: "How much have in world people?",
        answer:[
            {text: "11 Billion", correct:false},
            {text: "6.7 Billion", correct:false},
            {text: "8.1 Billion ", correct:true},
            {text: "4.3 Billion", correct:false}
        ]
    },
    {
        question: "What is the Albert Enistein formula?",
        answer:[
           { text: "E=mc2", correct:true},
           {  text: "q=p/l", correct:false},
            {text: "as=10/p", correct:false},
            {text: "t=6*o", correct:false}
        ]
    },
    {
        question: "How much in world country?",
        answer:[
            {text: "78 countries ", correct:false},
            {text: "210 countries ", correct:false},
            {text: "158 countries ", correct:false},
            {text: "195 countries ", correct:true}
        ]
    },
    {
        question: "How much language in world?",
        answer:[
            {text: "6,000", correct:false},
            {text: "7,000", correct:true},
            {text: "3,500", correct:false},
            {text: "9,000", correct:false}
        ]
    },
];

const questionElement= document.getElementById("question")
const answerButton = document.getElementById("answer_buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex =0 
    score = 0
    nextButton.innerHTML="Next"
    showQuestion()
}

function showQuestion() {
    resetState() 
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + '. ' + currentQuestion.question

    currentQuestion.answer.forEach(answer=>{
        const button = document.createElement("button")
        button.innerHTML= answer.text
        button.classList.add("btn")
        answerButton.append(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)
    })
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct")

    }else{
        selectedBtn.classList.add("incorrect")
    }
    
}

function resetState() {
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
startQuiz()