/*function play(){
    //hide home screen
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    //show playground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');
}*/
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    //console.log('player pressed', playerPressed);

    //exit game if user pressed Esc
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //expected pressed
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
   

    //chk match or not
    if(playerPressed == expectedAlphabet){
        //update score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const remainingLife = currentLife - 1;
        currentLifeElement.innerText = remainingLife;

        if(remainingLife == 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);
function continueGame(){
    //generate a random alphabet
    const alphabet = getARandomAlphabet();
    //console.log(alphabet);

    //set alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    const currentLifeElement = document.getElementById('current-life');
    currentLifeElement.innerText = 5;

    const currentScoreElement = document.getElementById('current-score');
    currentScoreElement.innerText = 0;
    continueGame();
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    //update final score
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;

    const khatam = document.getElementById('game-score');
    khatam.innerText = currentScoreText;

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
    
}