let buttonEl = document.querySelector('.start');
let timerEl = document.querySelector('span.timer');
let scoreEl = document.querySelector('span.score')
let containerel = document.querySelector('.container')

let timer = 60;
let score = 0;
let numberofquestions = 0;
score = localStorage.getItem('score')

score = JSON.parse(score)['score']
scoreEl.textContent = score

const rightAnswers =['html','flex','Luffy','Hyper text markup language']


// questiongen('Inside which HTML element do we put the JavaScript?','<script>','<js>','<scripting>')
// questiongen('What does HTML stand for?','Hyperlinks and text markup language','Home tool markup language','Hyper text markup language')
// questiongen('Who is the goat','Luffy','Goku','Naruto')
function questiongen(question,answer1,answer2,answer3){
    let questionel = document.createElement('h2');
    questionel.setAttribute('class','question')
    questionel.textContent = question
    
    let orderel = document.createElement('ol');
    orderel.addEventListener('click',checkaswer)
    
    
    let answerOne = document.createElement('li')
    answerOne.setAttribute('class','answer')
    answerOne.textContent = answer1;

    let answertwo = document.createElement('li')
    answertwo.textContent = answer2;
    answertwo.setAttribute('class','answer')

    let answerThree = document.createElement('li')
    answerThree.setAttribute('class','answer')
    answerThree.textContent = answer3;

    orderel.appendChild(answerOne)
    orderel.appendChild(answertwo)
    orderel.appendChild(answerThree)

    containerel.appendChild(questionel)
    containerel.appendChild(orderel)

    

    
}
function checkaswer(event){
    let answer = event.target
    if(answer.className ==='answer'){
        if(rightAnswers.includes(answer.textContent)){
            console.log('right')
        
            
        }else{
            console.log('wrong')
            timer -= 10;
            timerEl.textContent= timer;
        
        }
    }
    clearcontainer();
    numberofquestions ++;
    switch(numberofquestions){
        case 1:
            questiongen('Inside which HTML element do we put the JavaScript?','<script>','<js>','<scripting>')
            console.log('running')
        break;
        
        case 2:
            questiongen('What does HTML stand for?','Hyperlinks and text markup language','Home tool markup language','Hyper text markup language');
        break;

        case 3:
            questiongen('Who is the goat','Luffy','Goku','Naruto');
        break

        default:
            savescore(timer);
            timer = 0
            makeform();
        break
            
    }
}

function clearcontainer(){
    containerel.innerHTML =''
}

function savescore(score){
    localStorage.setItem('score',JSON.stringify({score}));
}

function makeform(){
    let form = document.createElement('form');

    let label =document.createElement('label');
    label.setAttribute('for','name');
    label.textContent = 'Your name goes here';

    let inputel = document.createElement('input');
    inputel.setAttribute('type','text');
    inputel.setAttribute('name','name');
    inputel.setAttribute('id','name');
    inputel.setAttribute('placeholder','Name');

    let buttonel = document.createElement('button')
    buttonel.textContent = 'click'
    buttonel.addEventListener('click',event=>{
        event.preventDefault();
        let formdata = new FormData(form);
        let name = formdata.get('name')
        localStorage.setItem('Data',JSON.stringify({name,"score":timer}))
    })

    form.appendChild(label);
    form.appendChild(inputel);
    form.appendChild(buttonel);
    clearcontainer();
    containerel.appendChild(form)


    
}

buttonEl.addEventListener('click',()=>{
   timerEl.textContent = timer
   clearcontainer()
   questiongen('Which is true?','"8"===8','8==eight','8===8')
   let interval = setInterval(()=>{
   
    if(timer>=1){
        timer -= 1
        timerEl.textContent = timer
     }
    if(timer <= 0){
        timer = 0
        timerEl.textContent = timer
        clearInterval(interval)
        savescore(timer)
        makeform()
        

        
     }
   },1000)

   
    
    
})

