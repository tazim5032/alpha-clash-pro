/*function play(){
    //hide home screen
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    //show playground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');
}*/
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