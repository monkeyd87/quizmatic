let buttonEl = document.querySelector('.start');
let timerEl = document.querySelector('span.timer');
let scoreEl = document.querySelector('span.score')
let containerel = document.querySelector('.container')

let timer = 30;
let score = 0;

const rightAnswers =['html','flex','kkkdkdkdkk']

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
    clearcontainer()
}

function clearcontainer(){
    containerel.innerHTML =''
}

buttonEl.addEventListener('click',()=>{
   timerEl.textContent = timer
   clearcontainer()
   questiongen('which is not a programing language','javascript','html','python')
   let interval = setInterval(()=>{
   
    if(timer>=1){
        timer -= 1
        timerEl.textContent = timer
     }
    if(timer <= 0){
        timer = 0
        timerEl.textContent = timer
        clearInterval(interval)
        
        
     }
   },1000)

   
    
    
})

