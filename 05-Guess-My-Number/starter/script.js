'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 40;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let SecretNumber = Math.trunc(Math.random()*20) + 1; 
let score = 20;
let highSocore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const button = document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
// when no input
    if(!guess){
        // document.querySelector('.message').textContent = '🚫 No Number!';
        displayMessage('🚫 No Number!');
        // when he wins
    }else if(guess === SecretNumber){
        displayMessage( '👍 Correect Number!');
        document.querySelector('.number').textContent = SecretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highSocore){
            highSocore = score;
            document.querySelector('.highscore').textContent = highSocore;
        }
        document.querySelector('.check').disabled = true;

        // guess too low
    }else if(guess !== SecretNumber){
        if(score > 1){
            displayMessage( guess > SecretNumber ? '😒 Too higher':  '😁 Too low');
            score--;
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('🤦‍♂️🤦‍♀️😢 lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    } 
});

document.querySelector('.again').addEventListener('click', function(){
    SecretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score = 20;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.check').disabled = false;
});


