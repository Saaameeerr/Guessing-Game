let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrong = document.querySelector('.wrong');
let guesses = document.getElementById('guesses');

let answer= Math.floor(Math.random()*100)+1;
console.log(answer);
let numGuesses= 0;

btn.addEventListener('click',()=>{
  guessesNumber();
})
function guessesNumber(){
  if(input.value<1 || input.value>100 || isNaN(input.value))
    wrong.innerHTML = "Enter between 1 to 100";
  else{
    numGuesses ++;
    guesses.innerHTML = "no. of Guess :"+numGuesses;
    if(input.value > answer){
      wrong.innerHTML ='You  guessed too high !';
      input.value="";
    }
    else if(input.value < answer){
      wrong.innerHTML ='You  guessed too low !';
    }
    else{
      wrong.innerHTML = "Congratulation You guessed it !";
      setTimeout(()=>{
        resetGame();
        },3000);
      }
    }
  }
  function resetGame(){
    numGuesses= 0;
    answer=  Math.floor(Math.random()*100)+1;
    input.value='';
    guesses.innerHTML="No. of Guess: 0";
  }