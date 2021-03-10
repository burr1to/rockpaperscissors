const game = function(){
    let pScore = 0;
    let cScore = 0;

    //start game
    const startGame =function(){
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');
        
        playBtn.addEventListener('click',() => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');


        });
    };
    //play match
    const playMatch = function(){
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand')
        
        const computerHand = document.querySelector('.computer-hand')
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(function(hand){
            hand.addEventListener('animationend',function(){
                this.style.animation = '';
            });
        })
        //computer options
        const computerOptions = ['rock','paper','scissors'];

        options.forEach(option=>{
            option.addEventListener('click', function() {
                    //Computer choice
                    const computerNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOptions[computerNumber];
                    //Here is were we call compare hands
                   setTimeout(() =>{
                    compareHands(this.textContent,computerChoice);



                    //Update images
                    playerHand.src = `${this.textContent}.png`;
                    computerHand.src = `${computerChoice}.png`;
                   },2000);
                   
                    //Animation
                    playerHand.style.animation = "shakePlayer 2s ease";
                    computerHand.style.animation = "shakeComputer 2s ease";
                    
                });
        });   
    };
    const updateScore = function(){
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;


    }
    const compareHands = function(playerChoice,computerChoice){
        //update text
        const winner = document.querySelector('.winner');
        //Checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
        //Check rock
        if (playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent ="You Won!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins!!";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check Paper
        if (playerChoice === "paper"){
            if(computerChoice === "rock"){
                winner.textContent ="You Won!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins!!";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check Scissors
        if (playerChoice === "scissors"){
            if(computerChoice === "paper"){
                winner.textContent ="You Won!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins!!";
                cScore++;
                updateScore();
                return;
            }
        }
    };


    //Call all inner functions
    startGame();
    playMatch();
};
//start the game
game();

