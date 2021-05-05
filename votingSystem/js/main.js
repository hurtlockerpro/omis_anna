
let questionsList = document.getElementById('questionsList')

let btnNext = document.getElementById('btnNext')
let btnPrevious = document.getElementById('btnPrevious')

let progressBar = document.querySelector('.progress-bar')

let questionTitle = document.getElementById('questionTitle')

let btnYes = document.getElementById('btnYes')
let btnNo = document.getElementById('btnNo')

let questions = [
    'question 1 ?', // 0
    'question 2 ?', // 1
    'question 3 ?', // 2
    'question 4 ?', // 2
    

]

let answers = []
    /*{
        questionIndex: 20,
        answerYes: 20,
        answerNo: 20
    }*/


// associative
// answers[0].answerYes
// simple
// questions[1]


let activeQuestionIndex = 0

function generateQuestionList(){

    // count limits of questions in array
    checkQuestionLimits()

    // get questio title from array
    questionTitle.innerText = questions[activeQuestionIndex]

    let percent = (100 / questions.length) * (activeQuestionIndex + 1)
    changeProgressBar(percent.toFixed(2))

    let tagA = ''
    let a
    for (let index = 0; index < questions.length; index++) {
        //console.log(questions[index]);

        a = generateQuestionItem(questions[index])
        // add here data-
        a.setAttribute('data-qIndex', index)

        if (index == activeQuestionIndex)
        {
            a.classList.add('active')
        }
        tagA += a.outerHTML
    }
    questionsList.innerHTML = tagA

    // link event
    /*
    let btns = document.querySelectorAll('a.list-group-item')

    for (let index = 0; index < btns.length; index++) {

        btns[index].addEventListener('click', (event) => {
            //console.log(event)
            console.log('fsefgsfgs', event.target.dataset.qindex)

            //activeQuestionIndex = event.target.dataset.qindex
            //generateQuestionList()
        })
        
    }
    */
}

function generateQuestionItem(questionTitle){

    let a = document.createElement('a') // <a></a> 
    a.href = '#' // <a href="#"></a> 
    a.classList.add('list-group-item') // <a href="#" class="list-group-item"> </a> 
    a.classList.add('list-group-item-action') // <a href="#" class="list-group-item list-group-item-action"></a> 

    a.innerText = questionTitle // <a href="#" class="list-group-item list-group-item-action"> {text} </a> 

    return a // object // return a.outerHTML
}

function checkQuestionLimits(){
    if(activeQuestionIndex < 0){
        activeQuestionIndex = 0
    } 
    if (activeQuestionIndex > questions.length - 1) activeQuestionIndex = questions.length - 1
}

function changeProgressBar(progressPercent){
    progressBar.style.width = progressPercent + '%'
    progressBar.innerText = progressPercent + '%'
}


btnNext.addEventListener('click', (event) => {
    activeQuestionIndex++ //increment
    // activeQuestionIndex = activeQuestionIndex + 1
    // activeQuestionIndex += 1
    generateQuestionList()
})

btnPrevious.addEventListener('click', (event) => {
    activeQuestionIndex-- //decrement
    generateQuestionList()
})


btnYes.addEventListener('click', (event) => {
    console.log('btnYes')

    if (checkAnswer(activeQuestionIndex) == true)
    {
        answers[activeQuestionIndex].answerYes += 1
    } else {
        let answer = {
            questionIndex: activeQuestionIndex,
            answerYes: 1,
            answerNo: 0
        }

        answers[activeQuestionIndex] = answer
    }
    // generate chart
    generateChart()
})

btnNo.addEventListener('click', (event) => {
    console.log('btnNo')

    if (checkAnswer(activeQuestionIndex) == true)
    {
        answers[activeQuestionIndex].answerNo += 1
    } else {
        let answer = {
            questionIndex: activeQuestionIndex,
            answerYes: 0,
            answerNo: 1
        }
        //answers.push(answer)
        answers[activeQuestionIndex] = answer
    }

    // generate chart
    generateChart()
})

function checkAnswer(questionIndex){

    for (let index = 0; index < answers.length; index++) {
        const element = answers[index];
        if (element.questionIndex == questionIndex){
            return true
        }
    }
    return false
}

function generateChart(){

    let chartData = [
        ['Question', 'Yes answers', 'No answers'] // 0
    ]
    for (let index = 0; index < answers.length; index++) {
        if (answers[index] != null){
            chartData.push(
                [
                    questions[index], // question text
                    answers[index].answerYes,    // yes answers
                    answers[index].answerNo // no answer
                ]
            )
        }
    }
    /*
    [
        ['Galaxy', 'Distance', 'Brightness'], // 0
        ['Canis Major Dwarf', 8000, 23.3] // 1
    ]
    */

    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawStuff);

    function drawStuff() {
      var data = new google.visualization.arrayToDataTable(chartData);

      var options = {
        width: 800,
        chart: {
          title: 'Voting answers'
        },
        bars: 'vertical', // Required for Material Bar Charts.
        /*series: {
          0: { axis: 'Yes' }, // Bind series 0 to an axis named 'distance'.
          1: { axis: 'No' } // Bind series 1 to an axis named 'brightness'.
        },*/
        /*axes: {
          x: {
            distance: {label: 'parsecs'}, // Bottom x-axis.
            brightness: {side: 'top', label: 'apparent magnitude'} // Top x-axis.
          }
        }*/
      };

    var chart = new google.charts.Bar(
        document.getElementById('votingResults')
        );
    chart.draw(data, options);
  };

}


generateQuestionList()