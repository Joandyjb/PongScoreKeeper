const p1Button= document.querySelector('#p1Button');
const p2Button= document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
const p1Show = document.querySelector('#p1Show');
const p2Show = document.querySelector('#p2Show');

let p1Score = 0;
let p2Score = 0;

let winningScore = 5;
let isGameover = false;

p1Button.addEventListener('click', function(){
    if(!isGameover){
        p1Score += 1;
        
        if(p1Score == winningScore){
            isGameover= true;
            p1Show.classList.add('winner');
            p2Show.classList.add('loser');
            
        }
        p1Show.textContent= p1Score;
    }
    
    
})


p2Button.addEventListener('click', function(){
    if(!isGameover){
        p2Score += 1;
        
        if(p2Score == winningScore){
            isGameover= true;
            p2Show.classList.add('winner');
            p1Show.classList.add('loser');
            
        }
        p2Show.textContent= p2Score;
    }
})


resetButton.addEventListener('click', function(){ 
    isGameover = false;
    p1Score = 0;
    p2Score = 0;
    p1Show.textContent= 0;
    p2Show.textContent= 0;
    p2Show.classList.remove('winner', 'loser');
    p1Show.classList.remove('winner', 'loser');

    
})

winningScoreSelect.addEventListener('change', function(){
    winningScore= parseInt(this.value);
    isGameover = false;
    p1Score = 0;
    p2Score = 0;
    p1Show.textContent= 0;
    p2Show.textContent= 0;
    p2Show.classList.remove('winner', 'loser');
    p1Show.classList.remove('winner', 'loser');

})
