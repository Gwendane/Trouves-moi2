document.addEventListener("DOMContentLoaded", function () {
    let remainingAttempts = parseInt(prompt("Entrez le nombre maximal de tentatives :"));
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const checkButton = document.getElementById("checkButton");

    checkButton.addEventListener("click", function () {
        const guessInput = document.getElementById("guess");
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess)) {
            alert("Vous devez indiquer un nombre !");
        } else if (userGuess < randomNumber) {
            alert("Le nombre indiqué est trop petit");
        } else if (userGuess > randomNumber) {
            alert("Le nombre indiqué est trop grand");
        } else {
            alert("Vous avez gagné !");
            guessInput.disabled = true;
            checkButton.disabled = true;
        }

        remainingAttempts--;

        if (remainingAttempts === 0 && userGuess !== randomNumber) {
            alert("Vous avez perdu !");
            guessInput.disabled = true;
            checkButton.disabled = true;
        } else if (remainingAttempts > 0 && userGuess !== randomNumber) {
            alert(`Il vous reste ${remainingAttempts} tentative(s).`);
        }
    });
});