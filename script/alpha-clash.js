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

    //expected pressed
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);

    //chk match or not
    if(playerPressed == expectedAlphabet){
        console.log('got point');
    }
    else{
        console.log('lost a life');
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);
function continueGame(){
    //generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    //set alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}