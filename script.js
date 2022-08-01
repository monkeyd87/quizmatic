let buttonEl = document.querySelector('.start');
let timerEl = document.querySelector('span.timer');
let scoreEl = document.querySelector('span.score')

let timer = 30;
let score = 0;

buttonEl.addEventListener('click',()=>{
   timerEl.textContent = timer
   let interval = setInterval(()=>{
    document.querySelector('.container').style.display='none';
    if(timer>=1){
        timer -= 1
        timerEl.textContent = timer
     }
    if(timer <= 0){
        timer = 0
        timerEl.textContent = timer
        clearInterval(interval)
        alert('interval cleared')
     }
   },1000/5)

   
    
    
})

